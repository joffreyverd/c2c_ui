
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import {
    faAngleDown,
    faArrowsAltV,
    faAt,
    faAtlas,
    faBomb,
    faBullseye,
    faCamera,
    faCheckCircle,
//    faCheckSquare,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faCogs,
    faColumns,
    faComment,
    faComments,
    faCompass,
    faEdit,
    faFlag,
    faFlagCheckered,
    faGlobeAmericas,
    faHeart,
    faHistory,
    faHome,
    faImage,
    faInfo,
    faKey,
    faLayerGroup,
    faLink,
    faList,
    faLock,
    faMap,
    faMapMarkedAlt,
    faMapPin,
    faNewspaper,
    faObjectGroup,
    faPen,
    faPlus,
    faPlusCircle,
    faRoute,
    faSearch,
    faSignOutAlt,
    faSortAmountUp,
    faStar,
//    faSquare,
    faTachometerAlt,
    faThLarge,
    faThList,
    faTrash,
    // faTrashAlt,
    faUnlock,
    faUser,
    faUserCheck,
    faUsers,
    faWrench,
} from '@fortawesome/free-solid-svg-icons'

import {
    faCircle as faCircleRegular,
    faSun as faSunRegular,
    faTrashAlt as faTrashAltRegular,
} from '@fortawesome/free-regular-svg-icons'


import {
    faCreativeCommons,
    faFacebook,
    faGoogle,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'




// registered globally

export default {

    install(Vue){

        library.add(
            //solid icons
            faAngleDown,
            faArrowsAltV,
            faAt,
            faAtlas,
            faBomb,
            faBullseye,
            faCamera,
            faCheckCircle,
        //    faCheckSquare,
            faChevronLeft,
            faChevronRight,
            faCircle,
            faCogs,
            faColumns,
            faComment,
            faComments,
            faCompass,
            faEdit,
            faFlag,
            faFlagCheckered,
            faGlobeAmericas,
            faHeart,
            faHistory,
            faHome,
            faImage,
            faInfo,
            faKey,
            faLayerGroup,
            faLink,
            faList,
            faLock,
            faMap,
            faMapMarkedAlt,
            faMapPin,
            faNewspaper,
            faObjectGroup,
            faPen,
            faPlus,
            faPlusCircle,
            faRoute,
            faSearch,
            faSignOutAlt,
            faSortAmountUp,
            faStar,
        //    faSquare,
            faTachometerAlt,
            faThLarge,
            faThList,
            faTrash,
            // faTrashAlt,
            faUnlock,
            faUser,
            faUserCheck,
            faUsers,
            faWrench,

            //regular icons
            faCircleRegular,
            faSunRegular,
            faTrashAltRegular,

            //brands icons
            faCreativeCommons,
            faFacebook,
            faGoogle,
            faTwitter,
        )

        Vue.component('fa-icon', FontAwesomeIcon)
        Vue.component('fa-layers', FontAwesomeLayers)
    }
}
