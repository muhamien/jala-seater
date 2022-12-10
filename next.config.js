/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false
});

module.exports = withPWA({
  reactStrictMode: true,
  // env: {
  //   HYGRAPH_TOKEN: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzAwNTcxNTgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xiN2dlcDk5MHFyczAxdWtleXo3OXFoMS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjBlMGU1NTItN2JiYi00ZjA1LTllNTEtMTA0NWJkY2Y4YmFhIiwianRpIjoiY2xiN293dXRqMHF1YjAxcnA1azBhZTlqZCJ9.xfalhKUSiltQG6A2T1F_RHeXZ8I_2YHn146BS9U_-2RfUf9N3-MO2Te1zmcag1CYKJRMo_4Aff-ME_qSnO1k35XOUKNgPap6RZwamYfPrOe84AY5wiUsiyeVoK_pmFmoxtBg_8uKhCT6j9t755c9DfMXOeMbpoKva1vcMSBSlLlclaVco3_blFCGLjTAtppDqgdmaTc2bqxR_NYbttWUPbpE_0RQKIA2HxzpDAwesNIQ1EwrUGa5PcTTa4EWry7sEezqLVLvbw4j2yAjdZ9QrxWOnBgXB0rMhLTySekOgUNsnRvPPVtaitEvmEf-Dwkrj5_36qXMebi1oZOKuDNuYAQoXES6RcH0VUG70YzFW_ylxl6jSS0pdgEctH4suHypC4DFYaC77VA5moNFCfp8JCjrPVaCb34-RAk1geVMRwDaIONsxI5n85qG9SCFB8ao8wpBFwKYFutvqt-8_IltpI8MMm1wlkEuz9pFwDvAUgx8T4FKNOBsm7AaOwK120dGNcWYoHmIp0apEvbZpjtJrkYXHY6qmN_V0J7kEBuFhp-BJCp1LdmDYGs6Au2W3sQZkzp1EEDTamA6rUTQoWenwmzZuEZLGLFojO3RcA6eSq3wAKUVC7hFu31x6kSnzggppZOW6DqSkuqVUhfutuXArzT7aGWt4c9L8i3m97tnh3o',
  //   HYGRAPH_ENDPOINT: 'https://api-us-east-1.hygraph.com/v2/clb7gep990qrs01ukeyz79qh1/master',
  //   GOOGLE_CLIENT_ID:'',
  //   GOOGLE_CLIENT_SECRET:''
  // },
});