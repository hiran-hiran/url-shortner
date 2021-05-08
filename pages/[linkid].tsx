import { GetServerSideProps } from "next";
import React, { VFC } from "react";

import prisma from "../client";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const url = await prisma.link.findUnique({
      where: {
        linkId: params.linkid,
      },
    });

    if (url) {
      return {
        redirect: {
          destination: url.url,
        },
      };
    } else {
      return {
        redirect: {
          destination: "http://localhost:3000/",
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "http://localhost:3000/",
      },
    };
  }
};
const LinkId: VFC = () => {
  return <div>hello</div>;
};

export default LinkId;
