
import { Buffer } from 'buffer';

export const fetchChildren = async (accessToken, sharedFolderUrl) => {
    let apiUrl;
    if (sharedFolderUrl.includes('my.sharepoint.com')) {
        // C# equivalent base64 encoding in JavaScript
        const base64Value = Buffer.from(sharedFolderUrl, 'utf8').toString('base64'); // Convert to base64
        const encodedUrl = 'u!' + base64Value.trimEnd('=').replace(/\//g, '_').replace(/\+/g, '-'); // Mimic C#'s string transformation
        console.log('encodedUrl: SharePoint or OneDrive shared link', encodedUrl)

        // Build the API URL for SharePoint link
        apiUrl = `https://graph.microsoft.com/v1.0/shares/${encodedUrl}/driveItem/children`;
    } else {
        // Handle OneDrive personal link with same encoding logic
        const base64Value = Buffer.from(sharedFolderUrl, 'utf8').toString('base64');
        const encodedUrl = 'u!' + base64Value.trimEnd('=').replace(/\//g, '_').replace(/\+/g, '-');
        console.log('encodedUrl: OneDrive personal link', encodedUrl)

        apiUrl = `https://graph.microsoft.com/v1.0/shares/${encodedUrl}/driveItem/children`;
    }



    // Fetch children from the API
    const response = await fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch children: ${response.statusText}`);
    }

    // Parse and return the response data
    const data = await response.json();
    console.log('Data:', data);

    return data.value;
};
