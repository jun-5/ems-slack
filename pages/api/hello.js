// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const testView = {
    type: "home",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "A simple stack of blocks for the simple sample Block Kit Home tab.",
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Action A",
              emoji: true,
            },
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Action B",
              emoji: true,
            },
          },
        ],
      },
    ],
  };
  res.status(200).json(testView);
}
