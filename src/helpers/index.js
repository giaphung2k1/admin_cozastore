const parseJwt = (token) => {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch(error) {
        return null;
    }
};
// export let fillCalendar = (month, year) => {
let format_status_to_number = (level) => {
    let listStatus = ['pending','publish'];
    return listStatus[level];
}

let format_status_to_string = (status) =>{
    if(status == 'pending'){
        return 0;
    }
    return 1;
}

let validEmail =  (email) =>  {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

let validPassword = (password) => {
    if(password.length < 6){
        return false;
    }
    return true;
}


const checkImageFile = (file) => {
    let filename = file.name;
    let type = file.type;

    if(filename.lastIndexOf(".") == -1) {
        return false
    }

    if( type.lastIndexOf('png') != -1 || type.lastIndexOf('jpeg') != -1 || 
        type.lastIndexOf('jpg') != -1 || type.lastIndexOf('gif') != -1 ) {
        return true
    }

    return false;

}


export {
    parseJwt,
    format_status_to_number,
    format_status_to_string,
    checkImageFile,
    validEmail,
    validPassword
   
}