import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: {
        handlers: [
            async () => {
                await new Promise((resolve) => setTimeout(resolve, 3_000))
                console.log(`File processed after 3 seconds`)
                return Response.json({ message: 'File processed after 3 seconds' })
            },

            async () => {
                await new Promise((resolve) => setTimeout(resolve, 5_000))
                console.log(`File processed after 5 seconds`)
                return Response.json({ message: 'File processed after 8 seconds' })
            },
        ],
    },
}
