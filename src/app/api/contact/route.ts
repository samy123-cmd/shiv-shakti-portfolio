import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, message } = data;

        // Define the path to the messages file
        const dataDir = path.join(process.cwd(), 'src', 'data');
        const filePath = path.join(dataDir, 'messages.json');

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing messages
        let messages = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                messages = JSON.parse(fileContent);
            } catch (e) {
                // If file is corrupt or empty, start fresh
                messages = [];
            }
        }

        // Create new message object
        const newMessage = {
            id: Date.now(),
            date: new Date().toISOString(),
            name,
            email,
            message,
        };

        // Append and save
        messages.push(newMessage);
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
    }
}
