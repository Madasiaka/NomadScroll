let moreFriendsBtn = document.getElementById('metFriendsBtn')
let lessFriendsBtn = document.getElementById('lessFriendsBtn')
let friendsMetList = document.querySelector('.friendsMetList')
let friendsDiv = document.querySelectorAll('.friendsDiv')[0]

moreFriendsBtn.addEventListener('click', function(){
  let newFriends = friendsDiv.cloneNode(true)
  let input = newFriends.getElementsByTagName('input')[0]
  input.value = ''
  friendsMetList.appendChild(newFriends)
})

lessFriendsBtn.addEventListener('click', function(){
    let lastFriend = friendsMetList[(friendsMetList.length - 1)]
    friendsMetList.removeChild(lastFriend)
})