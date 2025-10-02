export function generateRandomChallenge() {
    const length = 32;
    const randomValues = new Uint8Array(length);
    window.crypto.getRandomValues(randomValues);
    return randomValues;
}
export async function createPasskey(){
    if (!navigator.credentials || !navigator.credentials.create || !navigator.credentials.get){
        return alert("Your browser does not support the Web Authentication API");
    }

    await navigator.credentials.create({
        publicKey: {
            challenge: generateRandomChallenge(),
            rp: { name: "FastForum", id: window.location.hostname },
            //here you'll want to pass the user's info
            user: { id: new Uint8Array(16), name: "johndoe@example.com", displayName: "John Doe"},
            pubKeyCredParams: [
                { type: "public-key", alg: -7 },
                { type: "public-key", alg: -257 }
            ],
            timeout: 60000,
            authenticatorSelection: {residentKey: "preferred", requireResidentKey: false, userVerification: "preferred"},
            attestation: "none",
            extensions: { credProps: true }
        }
    });

    //in a real app, you'll store the credentials against the user's profile in your DB
    //here we'll just save it in a global variable

}

export async function promptforPasskey(){
    // Simple biometric prompt (does not actually verify credentials)
    await navigator.credentials.get({
        publicKey: {
            challenge: new Uint8Array(32),
            timeout: 60000,
            userVerification: 'preferred',
        }
    });
}