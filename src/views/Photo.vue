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
                "04102020-3": {
                    "imageSrc": 'https://i.ibb.co/hWqjTbk/jkt48gracia-120404249-176242563998187-8365533492682278281-n.jpg'
                },
                "04102020-2": {
                    "imageSrc": 'https://i.ibb.co/1vrNjgT/04102020-2.jpg'
                },
                "04102020-1": {
                    "imageSrc": 'https://i.ibb.co/KxGWpnw/04102020-1.jpg'
                },
                "04102020": {
                    "imageSrc": 'https://i.ibb.co/MBMCSVW/04102020.jpg'
                },
                "02102020-3": {
                    "imageSrc": 'https://i.ibb.co/NWBDBg9/02102020-3.jpg'
                },
                "02102020-2": {
                    "imageSrc": 'https://i.ibb.co/RC4G8hQ/02102020-2.jpg'
                },
                "02102020-1": {
                    "imageSrc": 'https://i.ibb.co/sWKrc6T/02102020.jpg'
                },
                "02102020": {
                    "imageSrc": 'https://i.ibb.co/whM433Q/02102020-1.jpg'
                },
                "26092020-3": {
                    "imageSrc": 'https://i.ibb.co/d4qJcLb/jkt48gracia-120133510-402541580929875-2797794511229834861-n.jpg'
                },
                "26092020-2": {
                    "imageSrc": 'https://i.ibb.co/gtgGRkZ/jkt48gracia-120096488-429962021335888-7346533573304722713-n.jpg'
                },
                "26092020-1": {
                    "imageSrc": 'https://i.ibb.co/3s939W1/jkt48gracia-120138429-252357162747917-8748111100834361683-n.jpg'
                },
                "21092020-3": {
                    "imageSrc": 'https://i.ibb.co/HFxsx0K/119938356-366470078068896-538569694718758808-n.jpg'
                },
                "21092020-2": {
                    "imageSrc": 'https://i.ibb.co/6XxcfWT/119896365-187716032961263-7847522011953916507-n.jpg'
                },
                "21092020-1": {
                    "imageSrc": 'https://i.ibb.co/8BYVvVK/119820714-751509079031510-4052636550379613634-n.jpg'
                },
                "20092020-3": {
                    "imageSrc": 'https://i.ibb.co/ZMSLzbV/20092020-2.jpg'
                },
                "20092020-2": {
                    "imageSrc": 'https://i.ibb.co/XbHDqtV/20092020-1.jpg'
                },
                "20092020-1": {
                    "imageSrc": 'https://i.ibb.co/P99sJnf/20092020.jpg'
                },
                "18092020-3": {
                    "imageSrc": 'https://i.ibb.co/5R90tqy/698ce457-2410-4ef7-b20b-cd77dbd7b11b.jpg'
                },
                "18092020-2": {
                    "imageSrc": 'https://i.ibb.co/VqrjV18/119475189-174735120862033-5722570979389226970-n.jpg'
                },
                "18092020-1": {
                    "imageSrc": 'https://i.ibb.co/YcFSSdq/119720801-195156228642156-2855328862666834494-n.jpg'
                },
                "18092020": {
                    "imageSrc": 'https://i.ibb.co/ZLb6kpc/119555015-169219038089878-8674425437990998916-n.jpg'
                },
                "16092020-1": {
                    "imageSrc": 'https://i.ibb.co/XxLj9jk/16092020-1.jpg'
                },
                "16092020": {
                    "imageSrc": 'https://i.ibb.co/X56ngnY/16092020.jpg'
                },
                "14092020": {
                    "imageSrc": 'https://i.ibb.co/BGqY4D1/14092020.jpg'
                },
                "13092020-5": {
                    "imageSrc": 'https://i.ibb.co/CsbSQjq/13092020.jpg'
                },
                "13092020-4": {
                    "imageSrc": 'https://i.ibb.co/X3VTxTm/IMG-20200913-130253-647.jpg'
                },
                "13092020-3": {
                    "imageSrc": 'https://i.ibb.co/Yj04xmz/IMG-20200913-130247-906.jpg'
                },
                "13092020-2": {
                    "imageSrc": 'https://i.ibb.co/zhVXqBq/IMG-20200913-130245-344.jpg'
                },
                "13092020-1": {
                    "imageSrc": 'https://i.ibb.co/f4RVzGh/IMG-20200913-130246-508.jpg'
                },
                "futari-1": {
                    "imageSrc": 'https://i.ibb.co/Qv2dKqy/kinjiraretafutari2.jpg'
                },
                "futari": {
                    "imageSrc": 'https://i.ibb.co/d7kB4Fk/kinjiraretafutari.jpg'
                },
                "Gremerah-3": {
                    "imageSrc": 'https://i.ibb.co/W0n8908/IMG-20200913-072820-838.jpg'
                },
                "Gremerah-2": {
                    "imageSrc": 'https://i.ibb.co/WG0z4Y5/IMG-20200913-072825-460.jpg'
                },
                "Gremerah-1": {
                    "imageSrc": 'https://i.ibb.co/SxVdVNJ/IMG-20200913-072823-932.jpg'
                },
                "13092020-0": {
                    "imageSrc": 'https://i.ibb.co/6spCSPV/20200913-072039.jpg'
                },
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