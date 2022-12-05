
//model of structure of artist 
const artists = [
    {
        name: "Artist 1",
        style: "Anime",
        gender: "Male",
        shop: "Studio 1",
        avatarSrc: "",
        location: "Whitehall",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 1",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996892/finalProject/anime/animeShop2_dx3yve.jpg"],
            image: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996892/finalProject/anime/anime2_ppmoku.jpg",
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996892/finalProject/anime/anime3_lse1bb.jpg",
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime6_zylwmh.jpg",
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime5_lrbnha.jpg",
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime1_nysk4n.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 2",
        style: "Geometric",
        gender: "Female",
        shop: "Studio 10",
        avatarSrc: "",
        location: "Laval",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm artist 2, work with artist 10",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996679/finalProject/geometric/geo1_v564qy.jpg", 
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996679/finalProject/geometric/geoShop1_jmlff4.jpg", 
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996679/finalProject/geometric/geoShop2_eevpdh.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996680/finalProject/geometric/geo4_udoxmz.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996680/finalProject/geometric/geo3_xagtfo.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996680/finalProject/geometric/geo5_lw3f6l.jpg", 
            "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996680/finalProject/geometric/geo2_h0sfy3.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 3",
        style: "Realism",
        gender: "Male",
        shop: "Studio 3",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 3, work with Artist 12",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realismShop2_cmoluv.png", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realismShop_upavav.webp"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realism2_d8aanw.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realism5_zdqv3s.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realism3_skqqxo.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realism1_qkdryn.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996590/finalProject/realism/realism4_ec9ea0.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 4",
        style: "Abstract",
        gender: "Male",
        shop: "Studio 4",
        avatarSrc: "",
        location: "Candiac",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 4",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996443/finalProject/Abstract/abstractShop2_kkagti.avif", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996444/finalProject/Abstract/abstractShop1_wyrbds.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996444/finalProject/Abstract/abstract1_qlm2kb.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996443/finalProject/Abstract/abstract4_v0di2t.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996443/finalProject/Abstract/abstract2_qvmelz.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996443/finalProject/Abstract/abstract5_xfidvp.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996443/finalProject/Abstract/abstract3_ahdizl.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 5",
        style: "Cartoon",
        gender: "Female",
        shop: "Studio 4",
        avatarSrc: "",
        location: "Candiac",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 5, work with Artist 4",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoonShop1_kbi3fj.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoonShop_ehusda.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoon5_bxnqbj.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoon3_wbienx.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoon1_f1wwkx.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoon2_zqrx3w.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1670001490/finalProject/cartoon/cartoon4_jkn9gk.jpg"]
        },
        appointments: []
    },
    { 
        name: "Artist 6",
        style: "Engraving",
        gender: "Female",
        shop: "Studio 6",
        avatarSrc: "",
        location: "Brossard",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 6",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995357/finalProject/engraving/engravingShop4_fllfhx.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995357/finalProject/engraving/engravingShop2_q7vrqi.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995355/finalProject/engraving/engravingShop5_qnaqqn.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995352/finalProject/engraving/engraving8_thbcad.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995348/finalProject/engraving/engraving9_qvj0xh.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995353/finalProject/engraving/engraving2_x4l0ff.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995353/finalProject/engraving/engraving10_fkih3n.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 7",
        style: "Trash Polka",
        gender: "Male",
        shop: "Studio 1",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 7",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995474/finalProject/trashpolka/trahspolkaShop_xrdjyb.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995472/finalProject/trashpolka/trashpolkaShop_2_uwyenx.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995473/finalProject/trashpolka/trashpolka2_ldvnke.png", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995473/finalProject/trashpolka/trashpolka1_hzbz4t.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995473/finalProject/trashpolka/trashpolka5_zojzeh.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995473/finalProject/trashpolka/trashpolka3_wtlgsk.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995472/finalProject/trashpolka/trashpolka4_ctrtdu.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 8",
        style: "Blackwork",
        gender: "Male",
        shop: "Studio 8",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 8",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994989/finalProject/BlackWork/blackShop2_j8ncgw.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994989/finalProject/BlackWork/blackShop1_erpbyz.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994989/finalProject/BlackWork/black1_ihd695.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994989/finalProject/BlackWork/black4_gccdbd.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994988/finalProject/BlackWork/black3_mvrksi.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994988/finalProject/BlackWork/black5_jmv3ec.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994988/finalProject/BlackWork/black6_iellch.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994988/finalProject/BlackWork/black2_jcl1bl.webp"]
        },
        appointments: []
    },
    {
        name: "Artist 9",
        style: "Anime",
        gender: "Male",
        shop: "Studio 9",
        avatarSrc: "",
        location: "St-Jerome",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 9",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996892/finalProject/anime/animeShop3_hcqq1x.jpg",
        "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996892/finalProject/anime/animeShop1_z5mapa.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime8_i8iodf.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime9_yfui1j.jpg", 
            "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996890/finalProject/anime/anime4_prfrxu.jpg", 
            "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996889/finalProject/anime/anime7_xvoypp.webp", 
            "https://res.cloudinary.com/duuqtqahj/image/upload/v1669996889/finalProject/anime/anime10_djbchs.webp"]
        },
        appointments: []
    },
 {
        name: "Artist 10",
        style: "Tribal",
        gender: "Female",
        shop: "studio 10",
        avatarSrc: "",
        location: "Laval",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 10",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994837/finalProject/tribal/tribalshop2_nrct9k.png", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994837/finalProject/tribal/tribalShop1_yny5ar.png"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994837/finalProject/tribal/tribal5_occv3z.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994837/finalProject/tribal/tribal4_apkomo.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994836/finalProject/tribal/tribal2_g472qe.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994836/finalProject/tribal/tribal1_edozuv.png", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994836/finalProject/tribal/tribal3_v95zrc.jpg"]
        },
        appointments: []
    },
{
        name: "Artist 11",
        style: "Neo Tradional",
        gender: "Male",
        shop: "Studio 11",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 11",
        following: false,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994676/finalProject/neo-trad/neoShop2_cllbjw.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994676/finalProject/neo-trad/neoShop1_leuz6g.webp"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994676/finalProject/neo-trad/neo4_o7yqmp.png", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994676/finalProject/neo-trad/neo2_ocybmr.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994676/finalProject/neo-trad/neo1_kfent6.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994675/finalProject/neo-trad/neo3_vmfvf5.webp", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994675/finalProject/neo-trad/neo5_jixbud.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 12",
        style: "Tradional & Old School",
        gender: "Male",
        shop: "Studio 3",
        avatarSrc: "",
        location: "Montreal",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 12, work with Artist 3",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994665/finalProject/trad/tradShop1_x41vfk.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994664/finalProject/trad/tradShop2_ybmbj8.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669994665/finalProject/trad/trad5_ytozas.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994665/finalProject/trad/trad6_onxag1.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994664/finalProject/trad/trad3_qbcvwm.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994664/finalProject/trad/trad2_gluj8e.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669994664/finalProject/trad/trad1_xenzag.jpg"]
        },
        appointments: []
    },
    {
        name: "Artist 13",
        style: "Engraving",
        gender: "Female",
        shop: "Studio 13",
        avatarSrc: "",
        location: "Longueuil",
        url: "",
        joined: "2016-02-02T12:00",
        about: "Hi I'm Artist 13",
        following: true,
        media: {
            shop: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995350/finalProject/engraving/engravingShop1_tdba6w.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995348/finalProject/engraving/engraving3Shop_zvz7bx.jpg"],
            images: ["https://res.cloudinary.com/duuqtqahj/image/upload/v1669995357/finalProject/engraving/engraving4_oamc11.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995353/finalProject/engraving/engraving3_rl5zal.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995355/finalProject/engraving/engraving1_uivvwy.jpg", "https://res.cloudinary.com/duuqtqahj/image/upload/v1669995355/finalProject/engraving/engraving6_rronww.jpg"]
        },
        appointments: []
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