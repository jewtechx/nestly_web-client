import Cookies from "js-cookie"

class Auth {
    getCipher():string {
        return Cookies.get("application:cipher") || ""
    }

    setCipher(token:String):void {
        return Cookies.set("application:cipher",token, {expires: 1})
    }

    clearCipher(): void {
        Cookies.remove("application:cipher")
    }
}

const auth = new Auth()

export default auth