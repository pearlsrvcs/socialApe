let db = {
        users: {
            userId: '12345abc12345def',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Somewhere, MS, USA'
        },
        screams: {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-06-27T01:33:07.862Z',
            likeCount: 5,
            commentCount: 2
        },
        comments: {
            userHandle: 'user',
            screamID: 'adfjasjdfalfjad',
            body: 'nice one',
            createdAt: '2019-06-27T01:33:07.862Z'
        },
        notifications: {
            recipient: 'user',
            sender: 'john',
            read: 'true|false',
            screamId: 'adflkjsdfjasjf',
            type: 'like|comment',
            createdAt: '2019-06-27T01:33:07.862Z'
        }
        const userDetails: {
            credentials: {
                userId: '12345abc12345def',
                email: 'user@gmail.com',
                handle: 'user',
                createdAt: '2019-03-15T10:59:52.798Z',
                imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
                bio: 'Hello, my name is user, nice to meet you',
                website: 'https://user.com',
                location: 'Somewhere, MS, USA'
            },
            likes: [{
                    userHandle: 'user',
                    screamId: 'hh705pWfWicVzGbHH2pa'
                },
                {
                    userHandle: 'user-2',
                    screamId: '3I0nFoQexRcofs50hBXO'
                }
            ]
        }