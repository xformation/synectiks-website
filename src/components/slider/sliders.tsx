import * as React from "react";
import Slider from "./slider";
import { SliderProps } from "./structure";
import "./slider.css";
class Sliders extends React.Component<{}, {}> {
  render() {
    const props: SliderProps = {
      list: [
        {
          active: false,
          style: {
            backgroundColor: "gray"
          },

          containers: [
            {
              elementType: "block",
              className: "loader up"
            },
            {
              elementType: "block",
              className: "loader down"
            }
          ]
        },
        {
          active: false,
          style: {
            // backgroundImage: "url(img/step1.jpg)"
          },
          containers: [
            {
              elementType: "img",
              className: "car",
              classIn: "car-in",
              src: "img/oxp.png"
            },
            {
              elementType: "block",
              className: "block",
              children: [
                // {
                //   elementType: "block",
                //   classIn: "heading-in",
                //   className: "heading one",
                //   text: "SYNECTIKS"
                // },
                // {
                //   elementType: "block",
                //   classIn: "heading-in",
                //   className: "heading two",
                //   text: "OPEN XFORMATION PLATFORM"
                // }

                {
                  elementType: "block",
                  classIn: "heading-in",
                  className: "heading caption one",
                  text: "HELPING CUSTOMERS TO"
                },
                {
                  elementType: "block",
                  classIn: "heading-in",
                  className: "heading caption two",
                  text: "CONSOLIDATE & MODERNIZE"
                },
                {
                  elementType: "block",
                  classIn: "heading-in",
                  className: "heading caption three",
                  text: "THEIR IT STACK."
                }
                // {
                //   elementType: "block",
                //   classIn: "heading-in",
                //   className: "heading caption-text one",
                //   text: "IMPLEMENT AN OUTCOME BASED OPEN PLATFORM THAT INCLUDES"
                // },
                // {
                //   elementType: "block",
                //   classIn: "heading-in",
                //   className: "heading caption-text two",
                //   text:
                //     "INCLUDES CONTINUOUSl AUDIT, COMPLIANCE, DELIVERY, BILLING, ELASTICITY, RESILIENCE."
                // }
              ]
            }
          ]
        }
      ],

      generals: {
        firstDelay: 1000,
        delay: 4000
      },

      preloads: [
        "img/step1.jpg",
        "img/car.png",
        "img/step2.jpg",
        "img/car1.png"
      ]
    };
    return <Slider {...props} />;
  }
}
export default Sliders;
