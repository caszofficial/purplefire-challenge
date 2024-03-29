import { Box } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

const Carrousel = () => {
  return (
    <Box className="wrapper">
      <Box className="slider">
        <Box className="slide">
          <img
            src="https://s3-alpha-sig.figma.com/img/889e/dbfa/13bed2d6cdf9f9bf3fbc755d63ffa6f3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMkZ7fPQO7Z2smMuopEAko7PukGDsoHpNEbIoru21pf54CYNhVv-GcU-oYuhZQd6kvWLj1szr0g-pJEgjnfMgDjrH5f4EUrjKBtNiLOcTLUVgfHTDr6Gc7w~pgQfWYmwnuR9gWrRMYdgiSBUl7kWEVijDmG6TP1IceYwfOSGtYvsIaeCDNsAFXmv4yTy9shTBVurDoyHztqywQ9YYqrL6huXX3QznJk~yHNhYqu8uuKjof-04Open3N6IpA7BBktL~K4cxmv9RxXXf2F3XhTCD5aIDfesi-8JT-U~9Qw17Hoyv7QtIKou-B-x~1doYZbFN1PXiK38pZKdxGVCeApww__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/9c08/bfb6/3cc3b6f7fc24e47c84b4912e54ef609e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzV63-Rf6zsmw~7s1AACRFgawe-amqaFSAHidhfDrkpRcAkZTWuu0ABiEmn~82rnvc9DwAJ0j5QhgN4ErvpHfAzAEsuB0506bJko7De22hg1sN90LC3Ga9q2Ben98IgjreoFBmFyHiO~MDmbBYEWmHYm~5hs263rTB5zWcTsIMPGanuXOIfkHCXeFc-C2ZDaTMmp9IGqApUP8gdfF4AsUuAF4azQboAKK2nJAmFFyFFnEH0dXxYRjPwBPZJ9HnpTzew8bPEXDgqJMNCuMqX7lg9~78hb9XqdUyomD7Yg83orvSn4lXEPKQrjddrLHPo8JIknqq1IiYPV4ZTWgb55Cg__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a715/409a/ed16f6f45d230559f9f9633e22a45247?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlAgtj7CA3iknhYpOlAol6zBuGn48U0NAue4VYCrSpSplReMdnZBtpZPUDvirwW5ppbElbNE0G-ZBrM4ScYyVOEhCcXsE4KGMdE5N3JN2Etg290Bh~uzrfsyTD6qlT16R89Rr6ugsfr1UXxURki0xsCxZ5CLFBKSVbIbhKoqfZt0jE-FOW5CmjYyRZScgBsDoyLDK9UzXB6fk30A57m6LXwnssgMGOC-sw0V-nx5rmJBNg4onCbyrGx58qGzK8MK3obkBURnaCC-2m9LDWE4qaZ2nz0N3CbqgB~6Nz7E9PbOkmyZ2ZE3OiG8znRlZ-x~y3UJznRyOIpTCgTStN6D~g__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/5916/6803/df601a17c1f640a6aac2dca1be7d7058?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWoQXDnTXYLksdTb88zQ~aJ-pI7oVj7lQFI~xA4-rognXmUc1YNaiHt4gn4~3FpMO8qD2zaH1fbdx4ZB2yUdej9Ih4GhsvEjr~YdUJnl-gTCc1JD2cF1exANEGrl2SG0onjc-gku1r7KBwM3q1AJNl~ZWf6VcLjTXm~8krZMs8r2~M4Js2klyj9t1tBm1EdTPYX0cmMb-B-so1LdqfDJZmBz2ZtR1yw4QnqmrLr~2p0bGEKizv4qRH83AxT5KWvQw2tzu~3iSeXNtDgiBIsLOhAmAw-lFlXhb3atgrScHpspcgaKmewZBC1~HSbrIHjy60Nf7MOvTn1OkOpDH2fuog__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2b70/d00f/245b283e610753b31e6631aac23129c0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6b9MJqkqa1xusvIYTbi4kTQpFMAWPunpZEZZ6HgfeZoVioHyHRiVcBi1J7HiQ71tvK3DbpnBEO~1Zbti5kyjoVkgNGMv8Fe0w6YH7gCXnuGBwNV9Sb67~Fdls0FjDB~NJ2sJrX6SvVtD3vdXhuWTrL8hq3~g41aha7ha~kAuQp8LR-bana7kmQ43TfazSpBkCzGZXQf2Eqp0AY8uTbiRfJL0kSnAIZHaEzYWOTxl7jIqTb15lPinoUaRYgk3sGBRxbYsfRPTvD0dXkbtFJRq8eBqg7Q~NlkVo6bG3PRPTmqG3vFWB0wTUIIYme25wZBp0Gwm-3wvhFOUx1ZkhHOrQ__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/56ba/bfc8/97df4b2044dcd59c38d787bbb6999116?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTdW4X9YeCJYCPY~HNXpcHkUgWxB-CxAf66LBp6gbnulNeLDK~bndUjNM2d1Jn6Ic2YdEitPFRFiRc7kRdOnJ9s46NmMgQyQyI61RPS3QaHzLW~FUB1mqiPl6QfONYsdKts4Sk9KpmdiQzUslAyP6QIsraIKUXjmQO3Xn1ihnPbVz0VICMM-dwj90GM2jQfY1qzdZyDIsg53~6cYGIofswaYdNUF6Tbli-Oc8NuPKxi8UTiJG~ziCylBFRRvIC~aDVQTW7-nIcdRVeOv04UlO1clAWGpkTLMKychcM7-Ib7z37bCIH4FG1r~W51OiyOVr4~wT9dPUH9N085FbX4Gpw__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/889e/dbfa/13bed2d6cdf9f9bf3fbc755d63ffa6f3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMkZ7fPQO7Z2smMuopEAko7PukGDsoHpNEbIoru21pf54CYNhVv-GcU-oYuhZQd6kvWLj1szr0g-pJEgjnfMgDjrH5f4EUrjKBtNiLOcTLUVgfHTDr6Gc7w~pgQfWYmwnuR9gWrRMYdgiSBUl7kWEVijDmG6TP1IceYwfOSGtYvsIaeCDNsAFXmv4yTy9shTBVurDoyHztqywQ9YYqrL6huXX3QznJk~yHNhYqu8uuKjof-04Open3N6IpA7BBktL~K4cxmv9RxXXf2F3XhTCD5aIDfesi-8JT-U~9Qw17Hoyv7QtIKou-B-x~1doYZbFN1PXiK38pZKdxGVCeApww__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/9c08/bfb6/3cc3b6f7fc24e47c84b4912e54ef609e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzV63-Rf6zsmw~7s1AACRFgawe-amqaFSAHidhfDrkpRcAkZTWuu0ABiEmn~82rnvc9DwAJ0j5QhgN4ErvpHfAzAEsuB0506bJko7De22hg1sN90LC3Ga9q2Ben98IgjreoFBmFyHiO~MDmbBYEWmHYm~5hs263rTB5zWcTsIMPGanuXOIfkHCXeFc-C2ZDaTMmp9IGqApUP8gdfF4AsUuAF4azQboAKK2nJAmFFyFFnEH0dXxYRjPwBPZJ9HnpTzew8bPEXDgqJMNCuMqX7lg9~78hb9XqdUyomD7Yg83orvSn4lXEPKQrjddrLHPo8JIknqq1IiYPV4ZTWgb55Cg__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a715/409a/ed16f6f45d230559f9f9633e22a45247?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlAgtj7CA3iknhYpOlAol6zBuGn48U0NAue4VYCrSpSplReMdnZBtpZPUDvirwW5ppbElbNE0G-ZBrM4ScYyVOEhCcXsE4KGMdE5N3JN2Etg290Bh~uzrfsyTD6qlT16R89Rr6ugsfr1UXxURki0xsCxZ5CLFBKSVbIbhKoqfZt0jE-FOW5CmjYyRZScgBsDoyLDK9UzXB6fk30A57m6LXwnssgMGOC-sw0V-nx5rmJBNg4onCbyrGx58qGzK8MK3obkBURnaCC-2m9LDWE4qaZ2nz0N3CbqgB~6Nz7E9PbOkmyZ2ZE3OiG8znRlZ-x~y3UJznRyOIpTCgTStN6D~g__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/5916/6803/df601a17c1f640a6aac2dca1be7d7058?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWoQXDnTXYLksdTb88zQ~aJ-pI7oVj7lQFI~xA4-rognXmUc1YNaiHt4gn4~3FpMO8qD2zaH1fbdx4ZB2yUdej9Ih4GhsvEjr~YdUJnl-gTCc1JD2cF1exANEGrl2SG0onjc-gku1r7KBwM3q1AJNl~ZWf6VcLjTXm~8krZMs8r2~M4Js2klyj9t1tBm1EdTPYX0cmMb-B-so1LdqfDJZmBz2ZtR1yw4QnqmrLr~2p0bGEKizv4qRH83AxT5KWvQw2tzu~3iSeXNtDgiBIsLOhAmAw-lFlXhb3atgrScHpspcgaKmewZBC1~HSbrIHjy60Nf7MOvTn1OkOpDH2fuog__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2b70/d00f/245b283e610753b31e6631aac23129c0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6b9MJqkqa1xusvIYTbi4kTQpFMAWPunpZEZZ6HgfeZoVioHyHRiVcBi1J7HiQ71tvK3DbpnBEO~1Zbti5kyjoVkgNGMv8Fe0w6YH7gCXnuGBwNV9Sb67~Fdls0FjDB~NJ2sJrX6SvVtD3vdXhuWTrL8hq3~g41aha7ha~kAuQp8LR-bana7kmQ43TfazSpBkCzGZXQf2Eqp0AY8uTbiRfJL0kSnAIZHaEzYWOTxl7jIqTb15lPinoUaRYgk3sGBRxbYsfRPTvD0dXkbtFJRq8eBqg7Q~NlkVo6bG3PRPTmqG3vFWB0wTUIIYme25wZBp0Gwm-3wvhFOUx1ZkhHOrQ__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/56ba/bfc8/97df4b2044dcd59c38d787bbb6999116?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTdW4X9YeCJYCPY~HNXpcHkUgWxB-CxAf66LBp6gbnulNeLDK~bndUjNM2d1Jn6Ic2YdEitPFRFiRc7kRdOnJ9s46NmMgQyQyI61RPS3QaHzLW~FUB1mqiPl6QfONYsdKts4Sk9KpmdiQzUslAyP6QIsraIKUXjmQO3Xn1ihnPbVz0VICMM-dwj90GM2jQfY1qzdZyDIsg53~6cYGIofswaYdNUF6Tbli-Oc8NuPKxi8UTiJG~ziCylBFRRvIC~aDVQTW7-nIcdRVeOv04UlO1clAWGpkTLMKychcM7-Ib7z37bCIH4FG1r~W51OiyOVr4~wT9dPUH9N085FbX4Gpw__"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carrousel;
