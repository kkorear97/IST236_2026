import Country from "../models/country";
import Destination from "../models/destination";

export const COUNTRIES = [
  new Country("c1", "Japan", "#ea746c"), // Red
  new Country("c2", "Czechia", "#8ea4b5"), // Blue
  new Country("c3", "Hungary", "#80c882"), // Green
  new Country("c4", "Netherlands", "#efa12c"), // Orange
  new Country("c5", "Denmark", "#af57bf"), // Purple
  new Country("c6", "Ireland", "#ffeb3b"), // Yellow
  new Country("c7", "South Korea", "#03a9f4"), // Light Blue
  new Country("c8", "Singapore", "#8bc34a"), // Light Green
  new Country("c9", "Vietnam", "#e77958"), // Deep Orange
  new Country("c10", "Australia", "#7f6aa3"), // Deep Purple
];

export const DESTINATION = [
  // Japan
  new Destination(
    "d1",
    "c1",
    "Mount Fuji",
    27,
    4.8,
    100000,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GJoZPjqsKEMALi9mdSa9HW9ccJqZd42DTA&s",
  ),
  new Destination(
    "d2",
    "c1",
    "Fushimi Inari Shrine",
    0,
    4.8,
    711,
    "https://www.japan-guide.com/g18/3915_top.jpg",
  ),

  // Czechia
  new Destination(
    "d3",
    "c2",
    "Prague Castle",
    21.34,
    4.7,
    870,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep79PBvz8NNT2dv67TPFnUJRVI4GV4CXDPxMfae3j8rDATT2uKIZtnVTQMdIoQZAhqM3DIm32x5S-h29EbYPF99g_-nY8YxdPmjTjP0LT0AJHJ9m-aXipVMBZC1-gt_XjqG6Ny_HA=s1360-w1360-h1020-rw",
  ),
  new Destination(
    "d4",
    "c2",
    "Charles Bridge",
    0,
    4.8,
    1357,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqVbYg2zIMhzmFhJwgneo5BRL00j6U8jfzlpdVhYGlQENIbxrA1p84GM5j2jXrpXjDP_TjdLj4QtONBan4jkslwEy5Q5cof-e6INLREO_JYx4fYFor70zkyjMjWqAymLre2lb2M=s1360-w1360-h1020-rw",
  ),

  // Hungary
  new Destination(
    "d5",
    "c3",
    "Buda Castle",
    5.05,
    4.7,
    1265,
    "https://www.historyhit.com/app/uploads/bis-images/5158762/Buda-Castle-788x537.jpg?x15201",
  ),
  new Destination(
    "d6",
    "c3",
    "Széchenyi Thermal Bath",
    39.24,
    4.2,
    1909,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeJtkv55D-50Enpy9AOoFWYQ87fopIGUYmB2X44TtSZkrQsN8eZILy_Sm_y0GXWUvNE81XgydFHPa9CBnfdwWPY9ZUsMp9YcgRv_KMocUQlzaBa5TkUgzf6cwv47R6UEpTtUc=s1360-w1360-h1020-rw",
  ),

  // Netherlands
  new Destination(
    "d7",
    "c4",
    "Rijksmuseum",
    28.96,
    4.8,
    1798,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeqBRj8TYs_Jbz9PjL6DpYiGyTafBcyoj5AlhWodsOmZkqXvrwNq-33N8Vt-YFPFtQXqaO1QhKXIT6iXLD9j-rMVfegKq-L4nYo1-UQrOqg2IkNj4vTbG0xxntM8j08iSbgk6BGA=s1360-w1360-h1020-rw",
  ),
  new Destination(
    "d8",
    "c4",
    "Keukenhof Gardens",
    24.32,
    4.7,
    1950,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNxI2-B17WyJE-rXxXBN7bsqZQwg3Fzz5ZUicNaTofikstEaJ3xWkeFrck_BaOvhcfF4pbw-Bu9StFKoiLHpuS0KPb5wRyIiZbsZ9-2VmKpelfPU9yC0k42flZjLyINBf3XF2c=w270-h312-n-k-no",
  ),

  // Denmark
  new Destination(
    "d9",
    "c5",
    "Tivoli Gardens",
    23.26,
    4.5,
    1843,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep3N0jGOhlzDNuBdCnZrBsUCxtqowUz2ZwH6OvpvMExX3zQ3HgYwglEozH23M38QHh_WOw_uGTazNPfKoCz1lNi_8mmI2DEiRc6Wdmc7PkpOBaOoWjzSBAdGQfOYAHQ05y2Mty1=s1360-w1360-h1020-rw",
  ),
  new Destination(
    "d10",
    "c5",
    "Nyhavn",
    0,
    4.8,
    1670,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGD_37Wetb3lPYdVqCnAV6wd5x5J51g4oDww&s",
  ),

  // Ireland
  new Destination(
    "d11",
    "c6",
    "Cliffs of Moher",
    12,
    4.9,
    1835,
    "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR4Ub7cUA2BpjeQlqmozvmbQM92h_M9CZ-s9C9ObmSg4MxLe7FLFLwVyhwus_LxPrKWrhkK9ZU544B6-lEnXxbG1O4&s=19",
  ),
  new Destination(
    "d12",
    "c6",
    "Dublin Castle",
    9.27,
    4.6,
    1204,
    "https://i0.wp.com/sdx.hux.mybluehost.me/wp-content/uploads/2017/10/Dublin-Castle-Chapel-Royal-Dublin-Ireland.jpg?resize=800%2C600&ssl=1",
  ),

  // South Korea
  new Destination(
    "d13",
    "c7",
    "Gyeongbokgung Palace",
    2.01,
    4.6,
    1395,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerDu7jA2ZNVK3atKoFPEYeHTh0MelNyIHwdIKDzJcBUARCeW1p_eMhKqamEijaAGHQERzySpZIwwvHFLhjJjnYPFxCS1aPBhsWgxOgFA9xfJrjDS9MTmNafjKz6LF4ydXO8jmV-=s1360-w1360-h1020-rw",
  ),
  new Destination(
    "d14",
    "c7",
    "Jeju Island",
    144,
    4.7,
    1000,
    "https://ca-times.brightspotcdn.com/dims4/default/40d675d/2147483647/strip/true/crop/1643x1080+0+0/resize/1200x789!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F63%2Ff2%2Fd3263df6400d9bdf95423021035a%2Fadobestock-177536059.jpeg",
  ),

  // Singapore
  new Destination(
    "d15",
    "c8",
    "Marina Bay Sands",
    585,
    4.7,
    2011,
    "https://media.cntraveler.com/photos/61e8d6b910b17d326b4255c3/16:9/w_2560,c_limit/MarinaBaySands-Singapore-CRHotel.jpg",
  ),
  new Destination(
    "d16",
    "c8",
    "Gardens by the Bay",
    9.39,
    4.7,
    2012,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJUc8iAbOqphTghXDgPTiTT7__oAOkwDMVGrazLqd7aDt3cbd1IxgvwpiB8oOOLdhdrNJ9nHUHYexwRYztAdKGE9khygLRXdQwKqJ5MUyOUkJd_bBauDFeXgcGL_RX7auDzbyJ=s1360-w1360-h1020-rw",
  ),

  // Vietnam
  new Destination(
    "d17",
    "c9",
    "Ha Long Bay",
    75,
    4.9,
    5000,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVREmGEP6DZk1c5l3fhbkEgvIteE4SCafI8A&s",
  ),
  new Destination(
    "d18",
    "c9",
    "Hoi An Ancient Town",
    5,
    4.7,
    2000,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQ0hzuNRHthS5woFCB0PD6DhqyQMSsILuFA&s",
  ),

  // Australia
  new Destination(
    "d19",
    "c10",
    "Sydney Opera House",
    33.43,
    4.9,
    1973,
    "https://media.architecturaldigest.com/photos/63d82d299dd44a3242d15ade/3:2/w_3000,h_2000,c_limit/GettyImages-982774858.jpg",
  ),
  new Destination(
    "d20",
    "c10",
    "Great Barrier Reef",
    350,
    4.8,
    1770,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LVd0DGfhf_Cs61031rRU_YSi3XFrkqU40A&s",
  ),
];
