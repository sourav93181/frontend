import MakeRequest from "../../utils/apiHandler";

// export async function GetCompanyById(body) {
//   try {
//     let result = await MakeRequest("http://127.0.0.1:8000/api/").post(body);
//     console.log("FROM Agent Api ", result);
//     if (result.status === 200) {
//       return { state: true, data: result.data };
//     } else {
//       console.log(result.data.message)
//       return { state: false, data: result.data.message };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function sigupAgentApiCall(body) {
//   try {
//     let result = await MakeRequest("http://127.0.0.1:8000/api/").put(body);
//     console.log("FROM Agent signupAPI ", result);
//     if (result.status === 200) {
//       return { state: true, data: result.data.message };
//     } else {
//       console.log(result.data.message)
//       return { state: false, data: result.data.message };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
export async function GetCompanys(body) {
    let result = await MakeRequest(
      `https://18.183.139.171:8000/api/`
    ).get();
    console.log("FROM LoginAPI ", result);
    console.log("api try block ok");
    if (result.status === 200) {
      console.log("api status code ok");
    //   console.log("FROM LoginAPI ", result);
      return { state: true, data: result.data };
    } else {
      console.log("api status not ok");
      console.log("FROM LoginAPI ", result);
      return { state: false, data: result.message };
    }

}

export async function GetCompanyById(body) {
  let result = await MakeRequest(
    `https://18.183.139.171:8000/api/`
  ).get(body);
  console.log("FROM LoginAPI ", result);
  console.log("api try block ok");
  if (result.status === 200) {
    console.log("api status code ok");
  //   console.log("FROM LoginAPI ", result);
    return { state: true, data: result.data };
  } else {
    console.log("api status not ok");
    console.log("FROM LoginAPI ", result);
    return { state: false, data: result.message };
  }

}


