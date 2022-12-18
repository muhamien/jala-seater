import { gql } from 'graphql-request';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getToken } from 'next-auth/jwt';
import { hygraphClient } from './lib/hygraph';
import { useEffect, useState } from 'react';

// const fetchAllEmployee = async () => {
//   const { data } = await axios.get(`${process.env.BASE_URL}/api/getAllEmployee`);
//   return data;
// }

// const createEmployee = async (data) => {
//   try {
//     const res = await fetch("/api/createItem", {
//       method: "POST",
//       body: JSON.stringify({ data }),
//       headers: { "Content-Type": "application/json" },
//     });
//     const newItem = await res.json();
//     setItems((prevItems) => [newItem, ...prevItems]);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function getServerSideProps(context) {
//   try {
//     const items = await table.select({}).firstPage();
//     return {
//       props: {
//         initialItems: minifyItems(items),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         err: "Something went wrong 😕",
//       },
//     };
//   }
// }

export async function middleware(req = NextRequest, res = NextResponse) {
  const session = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRET });
//   // const [employees,setEmployees] = useState([]);
//   // useEffect(() => {
//   //   fetchAllEmployee().then((res) => {
//   //     // if(session){
//   //     //   setEmployees(res);
//   //     //   console.log('employee',employees)
//   //     // }
//   //     console.log(res,session)
//   //   }).catch((err) => {
//   //     console.error(err);
//   //   })
//   // }, []);

//   // const findEmployee = employee.fin
}