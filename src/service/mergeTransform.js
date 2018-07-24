/*eslint-disable*/
export const changeHotel = ({ searchHotelResponse }, { groupindex, hotelindex }) => {
  searchHotelResponse.hotels[groupindex][hotelindex].checked = !searchHotelResponse.hotels[groupindex][hotelindex].checked;
  return searchHotelResponse;
};

export const setGroupedHotels = ({ searchHotelResponse }) => {
  const transHotel = [...searchHotelResponse.hotels];
  const updatedHotel = [].concat.apply([], transHotel);
  const groupedHotels = updatedHotel.filter((hotel) => hotel.checked);
  return groupedHotels;
};

export const hotelToMerge = ({ agtHotels, agtSelectedHotel }, id) => {
  const copy = { ...agtHotels, hotels: [...agtHotels.hotels] };
  const nonSelectedHotels = copy.hotels.filter((hotel) => hotel.id !== id);
  const renew = nonSelectedHotels.map((hotel) => {
    hotel.selected = false;
    return hotel;
  });
  const selectedHotel = agtSelectedHotel.hotels.filter((hotel) => hotel.id == id)[0];
  selectedHotel.selected = true;
  agtSelectedHotel = { ...copy, hotels: [selectedHotel, ...renew] };
  return agtSelectedHotel;
};
