export const baseUrl = "https://vatanparvarbackend.napaautomotive.uz/api";
export const authUrl = "https://vatandoshlar.napaautomotive.uz/api/auth";
export const portalBaseUrl = "https://vatandoshlar.napaautomotive.uz/api";
export const baseServerUrl =
  "https://vatanparvarbackend.napaautomotive.uz/storage";
export const PORTAL_IMAGE_URL =
  "https://vatandoshlar.napaautomotive.uz/storage/";

export const imageUrl = "https://vatandoshlar.napaautomotive.uz/storage";

// Get requests
export const GET_ALL_PROJECTS = `${baseUrl}/headcolumns`;
export const GET_ABOUT_ALL_PROJECTS = `${baseUrl}/aboutcolumns`;
export const GET_NEWS_URL = `${baseUrl}/news`;
export const GET_EVENTS_URL = `${baseUrl}/events`;
export const GET_PARTNERS_URL = `${baseUrl}/sponsrs`;
export const GET_PEACEFUL_URL = `${baseUrl}/columns`;
export const GET_PROJECTS_MENU = `${baseUrl}/column-menus`;
export const GET_INTERACTIVE_SERVICES_URL = `${baseUrl}/interactive-services`;
export const GET_ALL_TRUSTEES_URL = `${baseUrl}/trusts`;
export const GET_TRUSTEES_URL = `${baseUrl}/trusts/page/`;
export const GET_MAP_DATA_URL = `${baseUrl}/country_relationship/`;
export const GET_COUNTRIES = `${baseUrl}/countries`;
export const GET_ALL_COUNTRIES = `${portalBaseUrl}/community/all-region`;
export const GET_CONTACT = `${baseUrl}/contacts`;
export const GET_SLIDER = `${baseUrl}/sliders`;
export const GET_ASSOCIATIONS = `${baseUrl}/assosiations`;
export const GET_ASSOCIATIONS_CATEGORY = `${baseUrl}/assosiationcategory`;
export const GET_MEDIA_VIDOES_MENUS = `${baseUrl}/mediateka-video-menus`;
export const GET_MEDIA_IMAGES_MENUS = `${baseUrl}/mediateka-image-menus`;
export const GET_SINGLE_PAGINATION = baseUrl + "/";
export const GET_COLUMN_COUNT = `${baseUrl}/columns/page/`;
export const GET_COLUMNS_MENU = `${baseUrl}/column-menus`;
export const GET_TAG_RESULTS = `${baseUrl}/tagsearch`;
export const GET_LATEST_TAG = `${baseUrl}/latesttag`;
export const GET_POPULAR_TAG = `${baseUrl}/brandtag`;
export const GET_DIRECTION = `${baseUrl}/directions`;
export const GET_ABOUTS = `${baseUrl}/abouts`;
export const GET_MANAGEMENT = `${baseUrl}/managements`;
export const GET_SEARCH_RESULTS = `${baseUrl}/titlesearch`;
export const GET_FAMOUS_TAGS = `${baseUrl}/brandtag/5`;
// export const GET_EXPERT_USER = `/user`;
// export const GET_EXPERT_MENU = `/all`;
export const GET_NATIONS = `${portalBaseUrl}/national/get-all`;
export const GET_EXPERT_USER = `/user`;
export const GET_EXPERT_MENU = `/all`;
export const GET_VICTORINA_QUIZ = `/quiz/quizzes`;
export const GET_VICTORINA_PAGE = `/quiz/page`;
export const GET_WEBINAR_SLIDER = `${baseUrl}/webinars`;
export const GET_VICTORINA_FINISH = `/quiz/quizzes`;
export const GET_VICTORINA_BYID = `/quiz/quiz`;

//===============================PORTAL================================
export const GET_PORTAL_NEWS_DETAIL = "/new/";
export const GET_PORTAL_NEWS = "/news";
export const GET_LOCATION = "/location/get-all";
export const GET_LOCATION_ONE = "/location/get-one-with-cities/";
export const GET_LOCATION_Cities = "/location/get-all?location_id=";
export const GET_COMMUNITY_ALL_REGIONS = "/community/all-region";
export const GET_CITIES = "/location/get-all";
export const GET_COMMUNITY_ALL_PAGINATION = "/community/all-community";
export const GET_COMMUNITY_HOMEPAGE_DATA = "/community/page";
export const GET_COMMUNITY_ALL_EVENT = "/community/all-event";
export const GET_COMMUNITY_EVENT_DETAIL = "/community/event/";
export const GET_EXPERTS = `${portalBaseUrl}/expert/get-all/2`;
export const GET_EXPERT = `${portalBaseUrl}/expert/get-single`;
export const GET_EXPERT_SUGGESTIONS = `${portalBaseUrl}/suggestion/show-expert-suggestion`;
export const GET_EXPERT_REGISTER_MENU = `${portalBaseUrl}/menu/all`;
export const GET_EXPERT_EDUCATION = `${portalBaseUrl}/education/show-user`;
export const GET_EXPERT_EDUCATION_SPECIALIZATION = `${portalBaseUrl}/specialization/get-all`;
export const GET_EXPERT_EMPLOYMENT = `${portalBaseUrl}/employment/show-user`;
export const GET_EXPERT_REGISTER = `${portalBaseUrl}/expert/registered-user-data`;
export const GET_EXPERT_COUNT = "/expert/get-expert-city";
export const GET_EXPERT_PAGE = "/volunteer/get-volunteer-banners";
export const GET_EXPERT_FILTER = "/expert/filter-expert/";
export const POST_COMMUNITY_CREATE = "/community/create";
export const POST_COMMUNITY_IMAGE = "/media/create";
export const POST_COMMUNITY_NEWS_CREATE = "/community/news";
export const GET_LIBRARY_ALL = "/ebook/filter-all-books/";
export const GET_LIBRARY_ONE = "/ebook/get-one/";
export const GET_LIBRARY_SLIDER = "/ebook/all-slider-images";
export const VOLUNTEER_SHOW_USER = "/volunteer/get-all/";
export const VOLUNTEER_BY_COUNTRY = "/volunteer/filter-all-volunteer/";
export const VOLUNTEER_BY_CITY = "/volunteer/filter-volunteer/";
export const VOLUNTEER_SHOW_USER_BY_ID = "/volunteer/show-volunteer-user/";
export const VOLUNTEER_CITY = "/volunteer/get-volunteer-city";
export const GET_MEETINGS = "/meeting/meetings";
export const GET_MEETING_BY_ID = "/meeting/meeting/";
export const GET_MEETING_PAGE = "/meeting/page";
export const GET_ALL_ABOUT_UZB_MENU = "/about-uzb/get-all";
export const GET_SINGLE_ABOUT_UZB_MENU = "/about-uzb/get-one/";
export const GET_ALL_CITY_CONTENT = "/city-content/get-all";
export const GET_ALL_CITY = "/city/get-all";
export const GET_SINGLE_CITY = "/city/get-one/";
export const GET_ALL_GALLERY = "/photo-gallery/get-all";
export const GET_ONE_GALLERY = "/photo-gallery/get-one/";
export const GET_CITY_3D_ALL = "/city3d/get-all";
export const GET_CITY_3D_ONE = "/city3d/get-one/";
export const GET_ALL_CITY_VIDEO = "/city-video/get-all";
export const GET_SINGLE_CITY_VIDEO = "/city-video/get-one/";
export const GET_ALL_SIGHTSEEING = "/sightseeing/get-all";
export const GET_SINGLE_SIGHTSEEING = "/sightseeing/get-one/";
export const GET_VICTORINA_TEST = "/quiz/quiz";
export const GET_VOLUNTEER_ACTIVITY = `${portalBaseUrl}/volunteer/show-volunteer-user`;
export const VICTORINA_YOUTUBE = "/quiz/participant";
export const GET_CHAT_DATA = `${portalBaseUrl}/chat`;
export const GET_WEBINAR_BODY = `/meeting`;
export const GET_MAGAZINE_ABOUT = "/magazine/get-about";
export const GET_MAGAZINE_ONE_ABOUT = "/magazine/get-one-about";
export const GET_MAGAZINE_POPULAR = "/magazine/get-popular";
export const GET_MAGAZINE_ALL = "/magazine/get-all";
export const GET_MAGAZINE_ONE = "/magazine/get-one/";
export const GET_MAGAZINE_MENU = "/magazine/get-menu";
export const GET_MAGAZINE_ONE_MENU = "/magazine/get-one-menu/";
export const GET_MAGAZINE_TIPS = "/magazine/get-tips";
export const GET_MAGAZINE_ONE_TIPS = "/magazine/get-one-tips/";

// Post requests
export const SEND_CONTACT = `${baseUrl}/sendContact`;
export const SEND_EMAIL = `${authUrl}/send-mail`;
export const VERIFY_TOKEN = `${authUrl}/validate-token`;
export const SET_PASSWORD = `${authUrl}/set-password`;
export const LOGIN = `${authUrl}/login`;
export const RESET_PASSWORD = `${authUrl}/reset-password`;
export const SEND_PROJECT = `${baseUrl}/sendProject`;
export const REGISTER = `${authUrl}/register`;
export const VOLUNTEER_CREATE = "/volunteer/create";
export const SEND_EXPERT_REGISTER = `${portalBaseUrl}/auth/register`;
export const SEND_EXPERT_SUGGESTION = `${portalBaseUrl}/suggestion/create`;
export const SEND_EXPERT_EDUCATION = `${portalBaseUrl}/education/create`;
export const SEND_EXPERT_EMPLOYMENT = `${portalBaseUrl}/employment/create`;
export const SEND_EXPERT_SCIENTIFIC = `${portalBaseUrl}/scientificDegree/create`;
export const GET_EDUCATION = `${portalBaseUrl}/education/show-one-user`;
export const GET_EMPLOYMENT = `${portalBaseUrl}/employment/show-one-user`;
export const POST_VOLUNTEER_ACTIVITY = `${portalBaseUrl}/volunteer/create`;
export const CREATE_MEETING = "/meeting/create/";
export const VICTORINA_MEDIA_CREATE = "/media/create";
// Update requests
export const VOLUNTEER_UPDATE = "volunteer/update/";
export const UPDATE_EXPERT_EDUCATION = `${portalBaseUrl}/education/update`;
export const UPDATE_EXPERT_EMPLOYMENT = `${portalBaseUrl}/employment/update`;
export const UPDATE_VOLUNTEER_ACTIVITY = `${portalBaseUrl}/volunteer/update`;
// Delete requests
export const VOLUNTEER_DELETE = "/volunteer/delete/";
export const DELETE_EXPERT_EDUCATION = `${portalBaseUrl}/education/delete`;
export const DELETE_EXPERT_EMPLOYMENT = `${portalBaseUrl}/employment/delete`;
export const DELETE_VOLUNTEER_ACTIVITY = `${portalBaseUrl}/volunteer/delete`;
