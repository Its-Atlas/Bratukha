module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'c20d00',
            author: { name: `Here are your search results for ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};