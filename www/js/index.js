var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.isLogin();
    },
    isLogin: function() {

    },
};

app.initialize();

facebook_btn = document.getElementById('login_facebook');
details_facebook = document.getElementById('details_facebook');
logout_facebook = document.getElementById('logout_facebook');

facebook_btn.addEventListener("click", login, false);
details_facebook.addEventListener("click", details, false);
logout_facebook.addEventListener("click", logout, false);



function login() {
    facebookConnectPlugin.login(["email"], function(response){
        // alert('Login in');
        // alert(JSON.stringify(response.authResponse))
        window.plugins.toast.show('Login in', 'short', 'center')
        },
        function loginError() {
            // console.error(error)
            window.plugins.toast.show('Error de login', 'short', 'center')
        }
    );
}

function details() {

    facebookConnectPlugin.getLoginStatus( (response) => {
        if(response.status == 'connected'){
            facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender',[],
                function onSuccess (result) {
                    alert(JSON.stringify(result))
                },
                function onError(error) {
                    alert(JSON.stringify(error))
                }
            )
        }
        else {
            window.plugins.toast.show('No logueado', 'short', 'center')
        }
    })

}

function logout() {
    facebookConnectPlugin.logout((response)=> {

        alert(JSON.stringify(response))
    })
}
