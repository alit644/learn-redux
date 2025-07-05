import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "productsApi", // يُستخدم لتحديد مسار التخزين المؤقت (cache) الخاص بالـ API
  // تُستخدم لتعريف أنواع الوسوم (Tags) التي تساعد في إدارة التخزين المؤقت (cache) وتحديث البيانات تلقائياً
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProdctsList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export const { useGetProdctsListQuery } = productsApiSlice
