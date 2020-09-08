<template>
    <section>
        <AppBar/>
        <section>
            <v-responsive>
                <v-parallax
                src="https://i.ibb.co/P9dwmrK/sg-abt.jpg"
            >
                <v-row
                align="center"
                justify="center"
                >
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">Shania Gracia - Photo</h1>
                </v-col>
                </v-row>
            </v-parallax>
            </v-responsive>
            <div class="py-7"></div>
        </section>
        <section>
            <v-responsive>
                <v-container fill-height fluid>
                    <v-row no-gutters>
                        <v-col cols="12" sm="12" align="center" justify="center">
                            <h1 class="display-1 font-weight-bold" align="center" justify="center">Sosial Media</h1>
                            <span class="description">Dari Instagram dan Twitter Shania Gracia</span>
                            <jsz-vue-gallery v-bind:jsz-gallery="sosmed"></jsz-vue-gallery>
                            <v-btn icon color="#8e44ad" href="https://instagram.com/jkt48gracia"> <v-icon>mdi-instagram</v-icon></v-btn>
                            <v-btn icon color="#8e44ad" href="https://drive.google.com/drive/folders/1Fap8T4DlFTMvzb_VwEpw1k4jMylUbmkB"> <v-icon>mdi-package-down</v-icon></v-btn>
                            <v-btn icon color="#8e44ad" href="https://twitter.com/S_GraciaJKT48"> <v-icon>mdi-twitter</v-icon></v-btn>
                            <div class="py-4"></div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-container>
            </v-responsive>
        </section>
    </section>
</template>

<script>

import AppBar from '../components/AppBar'
import JszVueGallery from 'jsz-vue-gallery'

export default {
    components: {
        AppBar,
        JszVueGallery,
    },

    data() {
        return {
            sosmed: {
                "07092020-2": {
                    "imageSrc": 'https://i.ibb.co/VYp4xbs/118767273-1141142982953114-7189438732960726968-n.jpg'
                },
                "07092020-1": {
                    "imageSrc": 'https://i.ibb.co/RvbPzCw/118825546-696235700964466-8946964076335085688-n.jpg'
                },
                "05092020-2": {
                    "imageSrc": 'https://i.ibb.co/DY9HGws/05092020-2.jpg'
                },
                "05092020-1": {
                    "imageSrc": 'https://i.ibb.co/WnmmHr1/05092020-1.jpg'
                },
                "02092020-1": {
                    "imageSrc": 'https://i.ibb.co/pJLNxDW/Eg4-Mhqq-Vg-AEWv-Ke.jpg'
                },
                "01092020-2": {
                    "imageSrc": 'https://i.ibb.co/xm2Pnf2/059b4bfb-82ab-4193-a736-edc7fbb2b7ce.jpg'
                },
                "01092020-1": {
                    "imageSrc": 'https://i.ibb.co/x3p81bw/a7f26230-b271-4101-aaf5-98748446ad83.jpg'
                },
                "GreShan-UltahGre": {
                    "imageSrc": 'https://i.ibb.co/v3Hz9fn/20200901-220242.jpg'
                },
                "31082020-9": {
                    "imageSrc": 'https://i.ibb.co/XXdyCys/118594265-342952323555999-2171649953707124938-n.jpg'
                },
                "31082020-8": {
                    "imageSrc": 'https://i.ibb.co/MnQwvsd/118550635-317906822654879-4930768673656310498-n.jpg'
                },
                "31082020-7": {
                    "imageSrc": 'https://i.ibb.co/DYtX4yD/118513805-359126521782061-4291672927121912403-n.jpg'
                },
                "31082020-6": {
                    "imageSrc": 'https://i.ibb.co/WPMmNZL/118471135-801049450699627-7568234312770416876-n.jpg'
                },
                "31082020-5": {
                    "imageSrc": 'https://i.ibb.co/2ZCqj5Q/118460050-744504559428652-2430282399959472682-n.jpg'
                },
                "31082020-4": {
                    "imageSrc": 'https://i.ibb.co/C6H4mb5/20200901-220247.jpg'
                },
                "31082020-3": {
                    "imageSrc": 'https://i.ibb.co/8c4vqKR/20200901-220249.jpg'
                },
                "31082020-2": {
                    "imageSrc": 'https://i.ibb.co/rpYJN34/20200901-220251.jpg'
                },
                "31082020-1": {
                    "imageSrc": 'https://i.ibb.co/wJckFv3/20200901-220253.jpg'
                },
                "GreShan": {
                    "imageSrc": 'https://i.ibb.co/v3Hz9fn/20200901-220242.jpg'
                },
                "29082020-1": {
                    "imageSrc": 'https://i.ibb.co/n7nZRDJ/29082020-1.jpg'
                },
                "29082020-2": {
                    "imageSrc": 'https://i.ibb.co/0XmCTFx/29082020-2.jpg'
                },
                "29082020-3": {
                    "imageSrc": 'https://i.ibb.co/86J5258/29082020-3.jpg'
                },
                "26082020-1": {
                    "imageSrc": 'https://i.ibb.co/yfnggvL/26082020-1.jpg'
                },
                "26082020-2": {
                    "imageSrc": 'https://i.ibb.co/6H29pKs/26082020-2.jpg'
                },
                "img": {
                    "imageSrc": 'https://i.ibb.co/WnG3KXj/Any-Conv-com-sgn.jpg',
                },
                "img1": {
					"imageSrc": 'https://i.ibb.co/Ny7fc3V/Gre-Dahsyat.jpg',
                },
                "img2": {
					"imageSrc": 'https://i.ibb.co/ScZqfPJ/116253368-659265791347294-2973876958370532437-n.jpg',
                },
                "img3": {
					"imageSrc": 'https://i.ibb.co/n6k4Rnk/116193988-366005081051861-2783855895588099294-n.jpg',
                },
                "img4": {
					"imageSrc": 'https://i.ibb.co/kS9XKtr/105948595-2705486766332040-2847670334004516347-n.jpg',
                },
                "img5": {
					"imageSrc": 'https://i.ibb.co/zHHKCr5/104754451-1195398264192833-6037479525508202305-n.jpg',
                },
                "img6": {
					"imageSrc": 'https://i.ibb.co/tKt0sKD/106623077-605825136982828-4045912004704001453-n.jpg',
                },
                "img7": {
					"imageSrc": 'https://i.ibb.co/1zfp4C8/107100642-561218877898601-1079884531455252779-n.jpg',
                },
                "img8": {
					"imageSrc": 'https://i.ibb.co/W3Ryrb6/108313688-591108801544501-3263027196292875786-n.jpg',
                },
                "img9": {
					"imageSrc": 'https://i.ibb.co/bXM3stY/109410931-179095006913604-3742618717582128263-n.jpg',
                },
                "img10": {
					"imageSrc": 'https://i.ibb.co/7tSG56S/82769994-512903449424760-2553991660173418993-n.jpg',
                },
                "img11": {
					"imageSrc": 'https://i.ibb.co/fDZB7MD/100647074-1100157940366853-6272962828717958661-n.jpg',
                },
                "img12": {
					"imageSrc": 'https://i.ibb.co/HVQKPN4/101397042-254149279008055-6351054571680372055-n.jpg',
                },
                "img13": {
					"imageSrc": 'https://i.ibb.co/Hx65WqY/104009467-290570668655445-8047758051443950931-n.jpg',
                },
                "img14": {
					"imageSrc": 'https://i.ibb.co/T4Yjzw1/104431677-176904177126234-6522515849288136269-n.jpg',
				},
                "img15": {
					"imageSrc": 'https://i.ibb.co/YQTPxsF/Ef-Yl-7-CVAAEK1g-M-format-jpg-name-orig.jpg',
                },
                "img16": {
					"imageSrc": 'https://i.ibb.co/NxfvypJ/Ef-Yl87w-UEAAj1-OM-format-jpg-name-orig.jpg',
                },
                "img17": {
					"imageSrc": 'https://i.ibb.co/6wY2vb4/Ef-Ym-AFq-Uc-AEy-Jij-format-jpg-name-orig.jpg',
                },
                "img18": {
					"imageSrc": 'https://i.ibb.co/TtcBWFw/Ef-TCOd-CUw-AA6l-O-format-jpg-name-orig.jpg',
                },
                "img19": {
					"imageSrc": 'https://i.ibb.co/KqsQLKQ/Ef-TCPxg-Uw-AE56o-A-format-jpg-name-orig.jpg',
                },
                "img20": {
					"imageSrc": 'https://i.ibb.co/yNwBvhb/Ef-Dq-H5-PVAAAl-OMV-format-jpg-name-orig.jpg',
                },
                "img21": {
					"imageSrc": 'https://i.ibb.co/1mWvZsH/Ee6-BKi2-U4-AAkc-m-format-jpg-name-orig.jpg',
                },
                "img22": {
					"imageSrc": 'https://i.ibb.co/M5QLW0j/Eeqk9qq-Uw-AET3-ZC-format-jpg-name-orig.jpg',
                },
                "img23": {
					"imageSrc": 'https://i.ibb.co/nc4vZK1/Eeqk-X3-U0-Ag0iqo-format-jpg-name-orig.jpg',
                },
                "img24": {
					"imageSrc": 'https://i.ibb.co/w6kwrwc/Eeqk-GAUEAAe-Ll-S-format-jpg-name-orig.jpg',
                },
                "img25": {
					"imageSrc": 'https://i.ibb.co/c6FHY7r/Eeqk-0m-UMAAj-Qzy-format-jpg-name-orig.jpg',
                },
                "img26": {
					"imageSrc": 'https://i.ibb.co/cg72SkZ/Ed75-BP6-U8-AA-5-Of-format-jpg-name-orig.jpg',
                },
                "img27": {
					"imageSrc": 'https://i.ibb.co/sy9D0Np/Ed1noh-CUEAAVYo-I-format-jpg-name-orig.jpg',
                },
                "img28": {
					"imageSrc": 'https://i.ibb.co/M6Ry8XK/Edsq19-FUw-AA0f6-L-format-jpg-name-orig.jpg',
                },
                "img29": {
					"imageSrc": 'https://i.ibb.co/1TKrV13/Edsq3-G1-Uw-AAFor-F-format-jpg-name-orig.jpg',
                },
                "img30": {
					"imageSrc": 'https://i.ibb.co/rcw645n/Ed-S6e0-SUw-AQz-Dq-Z-format-jpg-name-orig.jpg',
                },
                "img31": {
					"imageSrc": 'https://i.ibb.co/N7t9Yf8/Ed-S6flf-UEAAug-Je-format-jpg-name-orig.jpg',
                },
                "img32": {
					"imageSrc": 'https://i.ibb.co/XJSb0yp/Ed-M7-Yd-HVc-AIHT-4-format-jpg-name-orig.jpg',
                },
                "img33": {
					"imageSrc": 'https://i.ibb.co/rmkRqjp/Ed-M7-ZF3-UYAIg-Zw-M-format-jpg-name-orig.jpg',
                },
                "img34": {
					"imageSrc": 'https://i.ibb.co/NCBT9nf/Ed-M7-Z6-EUw-AE9epy-format-jpg-name-orig.jpg',
                },
                "img35": {
					"imageSrc": 'https://i.ibb.co/BGGgM9p/Ed-G57c-DXs-AAFJd-format-jpg-name-orig.jpg',
				},
            },
        }
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>