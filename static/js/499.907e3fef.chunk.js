"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[499],{573:(e,i,t)=>{t.d(i,{A:()=>s});t(43);var n=t(579);function s(){return(0,n.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},499:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var n=t(43),s=t(213),l=t(339),d=t(322),o=t(89),r=t(3),c=t(573),a=t(789),h=(t(67),t(579));function u(){const[e,i]=(0,n.useState)([]),t=(0,r.wA)(),{loading:u}=(0,r.d4)((e=>e.root)),x=async e=>{try{t((0,o.r1)(!0));const e=await(0,a.A)("/doctor/getnotdoctors");i(e),t((0,o.r1)(!1))}catch(n){}};return(0,n.useEffect)((()=>{x()}),[]),(0,h.jsx)(h.Fragment,{children:u?(0,h.jsx)(d.A,{}):(0,h.jsxs)("section",{className:"user-section",children:[(0,h.jsx)("h3",{className:"home-sub-heading",children:"All Applications"}),e.length>0?(0,h.jsx)("div",{className:"user-container",children:(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"S.No"}),(0,h.jsx)("th",{children:"Pic"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Mobile No."}),(0,h.jsx)("th",{children:"Experience"}),(0,h.jsx)("th",{children:"Specialization"}),(0,h.jsx)("th",{children:"Fees"}),(0,h.jsx)("th",{children:"Action"})]})}),(0,h.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map(((e,i)=>{var t,n,d,o,r,c;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:i+1}),(0,h.jsx)("td",{children:(0,h.jsx)("img",{className:"user-table-pic",src:(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n.firstname})}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(d=e.userId)||void 0===d?void 0:d.firstname}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.lastname}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.email}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(c=e.userId)||void 0===c?void 0:c.mobile}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,h.jsxs)("td",{className:"select",children:[(0,h.jsx)("button",{className:"btn user-btn accept-btn",onClick:()=>{var i;(async e=>{try{window.confirm("Are you sure you want to accept?")&&(await l.Ay.promise(s.A.put("/doctor/acceptdoctor",{id:e},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:e}}),{success:"Application accepted",error:"Unable to accept application",loading:"Accepting application..."}),x())}catch(i){return i}})(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i._id)},children:"Accept"}),(0,h.jsx)("button",{className:"btn user-btn",onClick:()=>{var i;(async e=>{try{window.confirm("Are you sure you want to delete?")&&(await l.Ay.promise(s.A.put("/doctor/rejectdoctor",{id:e},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:e}}),{success:"Application rejected",error:"Unable to reject application",loading:"Rejecting application..."}),x())}catch(i){return i}})(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i._id)},children:"Reject"})]})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,h.jsx)(c.A,{})]})})}function x(){const[e,i]=(0,n.useState)([]),t=(0,r.wA)(),{loading:u}=(0,r.d4)((e=>e.root)),x=async e=>{try{t((0,o.r1)(!0));const e=await(0,a.A)("/appointment/getallappointments");i(e),t((0,o.r1)(!1))}catch(n){}};(0,n.useEffect)((()=>{x()}),[]);return(0,h.jsx)(h.Fragment,{children:u?(0,h.jsx)(d.A,{}):(0,h.jsxs)("section",{className:"user-section",children:[(0,h.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),e.length>0?(0,h.jsx)("div",{className:"user-container",children:(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"S.No"}),(0,h.jsx)("th",{children:"Doctor"}),(0,h.jsx)("th",{children:"Patient"}),(0,h.jsx)("th",{children:"Appointment Date"}),(0,h.jsx)("th",{children:"Appointment Time"}),(0,h.jsx)("th",{children:"Booking Date"}),(0,h.jsx)("th",{children:"Booking Time"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Action"})]})}),(0,h.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map(((e,i)=>{var t,n,d,o;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:i+1}),(0,h.jsx)("td",{children:(null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===e||void 0===e||null===(n=e.doctorId)||void 0===n?void 0:n.lastname)}),(0,h.jsx)("td",{children:(null===e||void 0===e||null===(d=e.userId)||void 0===d?void 0:d.firstname)+" "+(null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.lastname)}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),(0,h.jsx)("td",{children:(0,h.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:()=>(async e=>{try{var i,t;await l.Ay.promise(s.A.put("/appointment/completed",{appointid:null===e||void 0===e?void 0:e._id,doctorId:null===e||void 0===e?void 0:e.doctorId._id,doctorname:"".concat(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname," ").concat(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."}),x()}catch(n){return n}})(e),children:"Complete"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,h.jsx)(c.A,{})]})})}function j(){const[e,i]=(0,n.useState)([]),t=(0,r.wA)(),{loading:u}=(0,r.d4)((e=>e.root)),x=async e=>{try{t((0,o.r1)(!0));const e=await(0,a.A)("/doctor/getalldoctors");i(e),t((0,o.r1)(!1))}catch(n){}};return(0,n.useEffect)((()=>{x()}),[]),(0,h.jsx)(h.Fragment,{children:u?(0,h.jsx)(d.A,{}):(0,h.jsxs)("section",{className:"user-section",children:[(0,h.jsx)("h3",{className:"home-sub-heading",children:"All Doctors"}),e.length>0?(0,h.jsx)("div",{className:"user-container",children:(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"S.No"}),(0,h.jsx)("th",{children:"Pic"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Mobile No."}),(0,h.jsx)("th",{children:"Experience"}),(0,h.jsx)("th",{children:"Specialization"}),(0,h.jsx)("th",{children:"Fees"}),(0,h.jsx)("th",{children:"Remove"})]})}),(0,h.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map(((e,i)=>{var t,n,d,o,r,c;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:i+1}),(0,h.jsx)("td",{children:(0,h.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic,alt:null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n.firstname})}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(d=e.userId)||void 0===d?void 0:d.firstname}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.lastname}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.email}),(0,h.jsx)("td",{children:null===e||void 0===e||null===(c=e.userId)||void 0===c?void 0:c.mobile}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,h.jsx)("td",{className:"select",children:(0,h.jsx)("button",{className:"btn user-btn",onClick:()=>{var i;(async e=>{try{window.confirm("Are you sure you want to delete?")&&(await l.Ay.promise(s.A.put("/doctor/deletedoctor",{userId:e},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor deleted successfully",error:"Unable to delete Doctor",loading:"Deleting Doctor..."}),x())}catch(i){return i}})(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,h.jsx)(c.A,{})]})})}s.A.defaults.baseURL="http://localhost:5000/api",s.A.defaults.baseURL="http://localhost:5000/api",s.A.defaults.baseURL="http://localhost:5000/api";var v=t(184),m=t(216),p=t(475),b=t(720);function g(){const e=(0,r.wA)(),i=(0,m.Zp)(),t=[{name:"Home",path:"/",icon:(0,h.jsx)(v.rQ8,{})},{name:"Users",path:"/dashboard/users",icon:(0,h.jsx)(v.YXz,{})},{name:"Doctors",path:"/dashboard/doctors",icon:(0,h.jsx)(v.ifA,{})},{name:"Appointments",path:"/dashboard/appointments",icon:(0,h.jsx)(v.svy,{})},{name:"Applications",path:"/dashboard/applications",icon:(0,h.jsx)(v.maD,{})},{name:"Profile",path:"/profile",icon:(0,h.jsx)(v.x$1,{})}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("section",{className:"sidebar-section flex-center",children:(0,h.jsxs)("div",{className:"sidebar-container",children:[(0,h.jsx)("ul",{children:t.map(((e,i)=>(0,h.jsxs)("li",{children:[e.icon,(0,h.jsx)(p.k2,{to:e.path,children:e.name})]},i)))}),(0,h.jsxs)("div",{className:"logout-container",children:[(0,h.jsx)(b.EyH,{}),(0,h.jsx)("p",{onClick:()=>{e((0,o.iA)({})),localStorage.removeItem("token"),i("/login")},children:"Logout"})]})]})})})}function A(){const[e,i]=(0,n.useState)([]),t=(0,r.wA)(),{loading:u}=(0,r.d4)((e=>e.root)),x=async e=>{try{t((0,o.r1)(!0));const e=await(0,a.A)("/user/getallusers");i(e),t((0,o.r1)(!1))}catch(n){}};return(0,n.useEffect)((()=>{x()}),[]),(0,h.jsx)(h.Fragment,{children:u?(0,h.jsx)(d.A,{}):(0,h.jsxs)("section",{className:"user-section",children:[(0,h.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),e.length>0?(0,h.jsx)("div",{className:"user-container",children:(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"S.No"}),(0,h.jsx)("th",{children:"Pic"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Mobile No."}),(0,h.jsx)("th",{children:"Age"}),(0,h.jsx)("th",{children:"Gender"}),(0,h.jsx)("th",{children:"Is Doctor"}),(0,h.jsx)("th",{children:"Remove"})]})}),(0,h.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map(((e,i)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:i+1}),(0,h.jsx)("td",{children:(0,h.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e?void 0:e.pic,alt:null===e||void 0===e?void 0:e.firstname})}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.firstname}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.lastname}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.mobile}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.age}),(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.gender}),(0,h.jsx)("td",{children:null!==e&&void 0!==e&&e.isDoctor?"Yes":"No"}),(0,h.jsx)("td",{className:"select",children:(0,h.jsx)("button",{className:"btn user-btn",onClick:()=>{(async e=>{try{window.confirm("Are you sure you want to delete?")&&(await l.Ay.promise(s.A.delete("/user/deleteuser",{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:e}}),{pending:"Deleting in...",success:"User deleted successfully",error:"Unable to delete user",loading:"Deleting user..."}),x())}catch(i){return i}})(null===e||void 0===e?void 0:e._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)))})]})}):(0,h.jsx)(c.A,{})]})})}s.A.defaults.baseURL="http://localhost:5000/api";const y=e=>{const{type:i}=e;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("section",{className:"layout-section",children:(0,h.jsxs)("div",{className:"layout-container",children:[(0,h.jsx)(g,{}),"users"===i?(0,h.jsx)(A,{}):"doctors"===i?(0,h.jsx)(j,{}):"applications"===i?(0,h.jsx)(u,{}):"appointments"===i?(0,h.jsx)(x,{}):(0,h.jsx)(h.Fragment,{})]})})})}},67:()=>{}}]);
//# sourceMappingURL=499.907e3fef.chunk.js.map