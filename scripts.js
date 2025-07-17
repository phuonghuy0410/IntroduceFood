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
    ],
    "quan-1": [
      { name: "Bánh Xèo Quận 1", address: "333 Đường C, Quận 1, TP.HCM" },    
      { name: "Quán Bánh Xèo Quận 1", address: "444 Đường D, Quận 1, TP.HCM" }
    ],
    "quan-3": [
      { name: "Bánh Xèo Quận 3", address: "555 Đường E, Quận 3, TP.HCM" },
      { name: "Quán Bánh Xèo Quận 3", address: "666 Đường F, Quận 3, TP.HCM" }
    ]
  };

  // Dữ liệu khẩu phần ăn
  const portionSuggestions = {
    "single": [
      "Nếu bạn ăn một mình và muốn thưởng thức trọn vẹn hương vị của bánh xèo, khẩu phần hợp lý là từ 2–3 cái bánh xèo vừa. Bạn có thể chọn loại nhân tùy thích nhưng phổ biến nhất là:",
      " Bánh xèo nhân thịt và giá – truyền thống, đậm đà.",
      " Bánh xèo nhân tôm – thơm ngọt, phù hợp cho bữa ăn nhẹ.",
      " Thêm 1 cái bánh xèo trứng nếu bạn muốn no lâu hơn.",
      "👉 Ăn kèm với rau sống và nước chấm chua ngọt là đủ cho một bữa ngon miệng, không quá no."
    ],
    "couple": [
      "Một cặp đôi có thể gọi từ 4–6 cái bánh xèo, tùy khẩu vị và độ lớn của bánh",
      "Gợi ý gọi đa dạng nhân: 2 cái nhân tôm, 2 cái nhân thịt, và thêm 1–2 cái nhân trứng hoặc thập cẩm để đổi vị."
    , "👉 Một phần trà đá hoặc nước mía là lựa chọn tuyệt vời để kết thúc bữa ăn."
    ],
    "smallFamily": [
      "Với một gia đình nhỏ, nên gọi 8–12 cái bánh xèo. Trẻ em thường ăn 2 cái, người lớn 3 cái.",
      "Nên chọn nhiều loại nhân: thịt - tôm - trứng - mực hoặc thập cẩm để bữa ăn thêm phần hấp dẫn."
    , "👉 Nên gọi thêm nước chấm pha đậm vị, rau sống, và có thể gọi kèm thêm nem lụi, bánh tráng hoặc bún để bữa ăn phong phú hơn."
    ],
    "largeGroup": [
      "Với đại gia đình hoặc nhóm bạn đông người, nên chuẩn bị khẩu phần khoảng 25–35 cái bánh xèo, tùy sức ăn và độ lớn của bánh. Mỗi người thường ăn từ 2–3 cái",
      "Chắc chắn là phải gọi đa dạng nhân để mọi người có thể thưởng thức: 10 cái nhân tôm, 10 cái nhân thịt, 5 cái nhân trứng và thập cẩm.",
      " Đừng quên bảo nhân viên chuẩn bị nhiều rau sống, nước chấm và có thể thêm các món ăn kèm như bánh tráng, nem lụi để bữa tiệc thêm phần phong phú."
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
  const portionSelect = document.getElementById('portionSelect');
  const portionSuggestionsDiv = document.getElementById('portionSuggestions');

  portionSelect.addEventListener('change', function () {
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
