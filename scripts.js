document.addEventListener('DOMContentLoaded', function () {

  // Dữ liệu quán ăn theo khu vực
  const restaurants = {
    "go-vap": [
      { name: "Quán Bánh Xèo Gò Vấp", address: "123 Đường X, Gò Vấp, TP.HCM" },
      { name: "Bánh Xèo 123", address: "456 Đường Y, Gò Vấp, TP.HCM" }
    ],
    "thu-duc": [
      { name: "Bánh Xèo Thủ Đức", address: "789 Đường Z, Thủ Đức, TP.HCM" },
      { name: "Quán Xèo Thủ Đức", address: "101 Đường W, Thủ Đức, TP.HCM" }
    ],
    "binh-thanh": [
      { name: "Bánh Xèo Bình Thạnh", address: "111 Đường A, Bình Thạnh, TP.HCM" },
      { name: "Quán Xèo Bình Thạnh", address: "222 Đường B, Bình Thạnh, TP.HCM" }
    ]
  };

  // Dữ liệu khẩu phần ăn
  const portionSuggestions = {
    "single": [
      "Bánh Xèo 1 người tại Quán A",
      "Bánh Xèo Mini tại Quán B"
    ],
    "couple": [
      "Bánh Xèo cho 2 người tại Quán C",
      "Bánh Xèo 2 người tại Quán D"
    ],
    "smallFamily": [
      "Bánh Xèo gia đình tại Quán E",
      "Bánh Xèo cho gia đình nhỏ tại Quán F"
    ],
    "largeGroup": [
      "Bánh Xèo cho đoàn 10-12 người tại Quán G",
      "Bánh Xèo lớn cho nhóm tại Quán H"
    ]
  };

  // Chức năng gợi ý quán ăn theo khu vực
  const suggestRestaurantBtn = document.getElementById('suggestRestaurantBtn');
  const areaSelect = document.getElementById('areaSelect');
  const restaurantsList = document.getElementById('restaurantsList');

  suggestRestaurantBtn.addEventListener('click', function () {
    const selectedArea = areaSelect.value;
    const selectedRestaurants = restaurants[selectedArea];

    restaurantsList.innerHTML = `<h4>Danh sách các quán ở khu vực ${areaSelect.options[areaSelect.selectedIndex].text}:</h4>`;

    const ul = document.createElement('ul');
    selectedRestaurants.forEach(restaurant => {
      const li = document.createElement('li');
      li.textContent = `${restaurant.name} - ${restaurant.address}`;
      ul.appendChild(li);
    });

    restaurantsList.appendChild(ul);
  });

  // Chức năng gợi ý khẩu phần ăn
  const suggestPortionBtn = document.getElementById('suggestPortionBtn');
  const portionSelect = document.getElementById('portionSelect');
  const portionSuggestionsDiv = document.getElementById('portionSuggestions');

  suggestPortionBtn.addEventListener('click', function () {
    const selectedPortion = portionSelect.value;
    const selectedSuggestions = portionSuggestions[selectedPortion];

    portionSuggestionsDiv.innerHTML = `<h4>Gợi Ý Khẩu Phần cho ${portionSelect.options[portionSelect.selectedIndex].text}:</h4>`;

    const ul = document.createElement('ul');
    selectedSuggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      ul.appendChild(li);
    });

    portionSuggestionsDiv.appendChild(ul);
  });

});
    