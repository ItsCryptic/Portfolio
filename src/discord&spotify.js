function Api() {
    $(document).ready(function(){
            $.get("https://api.lanyard.rest/v1/users/202556225160871936", function({data}){
                $(".discord-tag").html(`<i class="fab fa-discord"></i>&nbsp;Discord Tag: ${data.discord_user.username}#${data.discord_user.discriminator}`)
                
                if (data.discord_status === 'dnd') {
                    $(".discord-status").html(`<i class="fab fa-discord"></i>&nbsp;Discord Status: <div class="spinner-grow text-danger"></div> Do Not Disturb`)
                } else if (data.discord_status === 'idle') {
                    $(".discord-status").html(`<i class="fab fa-discord"></i>&nbsp;Discord Status: <div class="spinner-grow text-warning"></div> Idle`)
                } else if (data.discord_status === 'online') {
                    $(".discord-status").html(`<i class="fab fa-discord"></i>&nbsp;Discord Status: <div class="spinner-grow text-success"></div> Online`)
                } else {
                    $(".discord-status").html(`<i class="fab fa-discord"></i>&nbsp;Discord Status: <div class="spinner-grow text-dark"></div> Offline`)
                }
    
                if (data.listening_to_spotify === false) {
                    $(".spotify").html(`<i class="fab fa-spotify"></i>&nbsp;Spotify: Nothing is playing.`)
                } else {
                    $(".spotify").html(`<i class="fab fa-spotify"></i>&nbsp;Spotify: ${data.spotify.artist} - ${data.spotify.song}`)
                }
            });
        })
}

Api()
setInterval(Api(), 30000)