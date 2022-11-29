
//model of structure of artist 
const artists = [
    {
        name: "artist 1",
        style: "anime",
        gender: "male",
        shop: "studio 1",
        avatarSrc: "",
        location: "Whitehall",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 1",
        following: true
    },
    {
        name: "artist 2",
        style: "Geometric",
        gender: "female",
        shop: "studio 10",
        avatarSrc: "",
        location: "Laval",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 2, work with artist 10",
        following: false
    },
    {
        name: "artist 3",
        style: "Realism",
        gender: "male",
        shop: "studio 3",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 3, work with artist 12",
        following: false
    },
   {
        name: "artist 4",
        style: "Abstract",
        gender: "male",
        shop: "studio 4",
        avatarSrc: "",
        location: "Candiac",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 4",
        following: true
    },
    {
        name: "artist 5",
        style: "Cartoon",
        gender: "female",
        shop: "studio 4",
        avatarSrc: "",
        location: "Candiac",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 5, work with artist 4",
        following: true
    },
   { 
        name: "artist 6",
        style: "Trash Polka",
        gender: "female",
        shop: "studio 6",
        avatarSrc: "",
        location: "Brossard",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 6",
        following: false
    },
    {
        name: "artist 7",
        style: "Engraving",
        gender: "male",
        shop: "studio 1",
        avatarSrc: "",
        location: "Longueuil",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 7",
        following: false
    },
 {
        name: "artist 8",
        style: "Blackwork",
        gender: "male",
        shop: "studio 8",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 8",
        following: true
    },
 {
        name: "artist 9",
        style: "Anime",
        gender: "male",
        shop: "studio 9",
        avatarSrc: "",
        location: "St-Jerome",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 9",
        following: false
    },
 {
        name: "artist 10",
        style: "Tribal",
        gender: "female",
        shop: "studio 10",
        avatarSrc: "",
        location: "Laval",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 10",
        following: false
    },
{
        name: "artist 11",
        style: "Neo Tradional",
        gender: "male",
        shop: "studio 11",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 11",
        following: false
    },
    {
        name: "artist 12",
        style: "Tradional & Old School",
        gender: "male",
        shop: "studio 3",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 12, work with artist 3",
        following: true
    },
    {
        name: "artist 13",
        style: "Engraving",
        gender: "female",
        shop: "studio 13",
        avatarSrc: "",
        location: "Longueuil",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 13",
        following: true
    },
];

const styles = [
    "Traditional & Old School", 
    "Neo Traditional", 
    "Fine Line",
    "Tribal",
    "Watercolor",
    "Blackwork",
    "Realism",
    "Japanese",
    "Trash Polka",
    "Geometric",
    "Anime",
    "Engraving",
    "Abstract",
    "Cartoon"
];


//model of what the post structure would look like 
const posts = {
    "1209791721099411456r1": {
        id: "1209791721099411456r1",
        authorHandle: "treasurymog",
        timestamp: "2020-01-19T09:14:00+00:00",
        status: "",
        media: [
            {
                type: "img",
                url: ""
            }
        ],
        likedBy: [],
    }
}

module.exports = {artists, posts, styles}