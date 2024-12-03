const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
const groups = {}; // 存储群组和成员

const conversation = [
    '寒流才是最屌的！',
    '干什么！',
    '饱饱泥素...',
];

server.on('connection', (socket) => {
	console.log('客户端已连接');

	// 接收消息并回复
	socket.on('message', (obj) => {
        const data = JSON.parse(obj);

        console.log(data)

        let content = '';

		console.log('收到消息');

       /*  if (data?.content && Math.random() > 0.5) {
            content = conversation[Math.floor(Math.random() * conversation.length)];
        }
        else {
            content = `${data.content}（自动复读）`;
        } */

        switch (data.type) {
            case 'joinGroup':
                // 用户加入群组
                const groupId = data.groupId;
                if (!groups[groupId]) {
                    groups[groupId] = [];
                }
                groups[groupId].push(socket);
                socket.groupId = groupId;
                console.log(`用户加入群组 ${groupId}`);
                console.log((groups[socket.groupId].length));
                break;
            case 'sendMessage':
                // 广播消息到群组
                const group = groups[socket.groupId];
                if (group) {
                    const response = JSON.stringify({
                        type: 'message',
                        content: data.content,
                        groupId: socket.groupId,
                        sender: 'other',
                        timestamp: new Date().toISOString(),
                    });

                    group.forEach((client) => {
                        // readyState 为 1
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(response);
                        }
                    });
                }
                break;
            default:
                console.log('未知消息类型:', data.type);
        }
	});

	// 关闭连接
	socket.on('close', () => {
		console.log('客户端已断开连接');
	});
});

console.log('WebSocket 服务器运行在 ws://localhost:8080');