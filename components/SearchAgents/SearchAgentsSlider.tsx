import React from "react";
import SwiperCore, { Navigation, Autoplay, Pagination, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IAgentAddressInfo,
  IAgentCategories,
  IAgentModel,
  IAgentPersonalInfo,
  IAgentSocialInfo,
} from "../../@types/project";
import SearchAgentCard from "./SearchAgentCard";

SwiperCore.use([Navigation, Autoplay, Pagination, Lazy]);

export interface ISearchAgentsSlider {
  agentSliderItems: IAgentModel[];
  action: React.Dispatch<
    React.SetStateAction<
      IAgentPersonalInfo &
        IAgentAddressInfo &
        IAgentSocialInfo &
        IAgentCategories & {
          open: boolean;
        }
    >
  >;
}

const SearchAgentsSlider = ({
  agentSliderItems,
  action,
}: ISearchAgentsSlider) => {
  return (
    <Swiper
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      slidesPerView={"auto"}
      breakpoints={{
        1024: {
          slidesPerView: agentSliderItems.length >= 3 ? 3 : 1,
        },
      }}
    >
      {agentSliderItems.map((agent, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SearchAgentCard
              action={() => action({ ...agent, open: true })}
              actionName={"Ver agente"}
              name={agent.fullName}
              tags={agent.categories}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SearchAgentsSlider;
