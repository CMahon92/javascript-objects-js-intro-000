
<<<<<<< HEAD
var playlist = {artistName: 'song' };

=======
//var playlist= artistName:”song”;
>>>>>>> 114f5e215e0355b2ebfeb5aca97d233bb5c8152a

function updatePlaylist(playlist,artistName,song){
playlist[artistName]=song
return playlist;
}

function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];
return playlist;
}
