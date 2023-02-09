const { oberknechtClient } = require("oberknecht-client");

const client = new oberknechtClient({
    token: "bbxxpxcy1w248ajgb4rkeytdkdwffd",
    // Token link generator: https://jubewe.github.io/oauthlink
    username: "jubewe",
    channels: ["jubewe", "ju_b0t"]
});

client.connect();

client.onReady(() => {
    console.log(`VoHiYo Client ready`);
});

client.onError((err) => {
    console.error(err);
});

client.onPRIVMSG((privmsg) => {
    console.log(`#${privmsg.channel.name} @${privmsg.userstate.username}: ${privmsg.message.messageText}`);
});