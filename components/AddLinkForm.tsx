import axios, { AxiosRequestConfig } from "axios";
import React, { Dispatch, VFC } from "react";
import { useForm } from "react-hook-form";

type Props = {
  setLinkId: Dispatch<any>;
};
type Link = {
  link: string;
};

export const AddLinkForm: VFC<Props> = ({ setLinkId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Link>();

  const onFormSubmit = async (values: Link) => {
    try {
      const config: AxiosRequestConfig = {
        url: "/api/addLink",
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
        method: "POST",
      };

      const res = await axios(config);
      console.log("res", res);
      if (res.status === 200) {
        setLinkId(res.data.link);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        {...register("link", {
          required: {
            value: true,
            message: "必須項目です",
          },
        })}
        type="text"
        className="bg-gray-100 w-full px-2 h-12 placeholder-gray-600 focus:outline-none focus:ring-2 focus-within:ring-indigo-700 rounded-lg"
        placeholder="Enter your url"
      />
      <div className="mt-2 text-red-600 text-sm">{errors?.link?.message}</div>
      <button
        type="submit"
        className="mt-8 px-3 py-1 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg">
        Short!
      </button>
    </form>
  );
};
