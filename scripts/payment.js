let enableOrDisablePayNowButton=()=>{
    let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    let payNowButton = document.getElementById("payNowBtn");
    if(isUserLoggedIn && isUserLoggedIn ==="false"){
      payNowButton.disabled =true;
    }else if(isUserLoggedIn==="true"){
        payNowButton.disabled=false;
    }
};
enableOrDisablePayNowButton();