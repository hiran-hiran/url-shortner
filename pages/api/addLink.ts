import prisma from "../../client";

export default async (req, res) => {
  const { link } = req.body;

  const existingLink = await prisma.link.findUnique({
    where: {
      url: link,
    },
  });

  if (existingLink) {
    return res.status(200).json({ link: existingLink.linkId });
  }
  const id = Math.random().toString(36).substr(2, 8);
  try {
    const addLink = await prisma.link.create({
      data: {
        url: link,
        linkId: id,
      },
    });

    console.log(addLink);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }

  res.status(200).json({ link: id });
};
