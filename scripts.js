// Khi tài liệu HTML đã tải xong hoàn toàn, chạy đoạn mã bên trong
document.addEventListener('DOMContentLoaded', function () {

  //  Dữ liệu các quán bánh xèo theo từng khu vực (dạng object)
  // Mỗi khu vực là một key, giá trị là mảng các quán ăn
  const restaurants = {
    "go-vap": [
      {
        name: "Bánh Xèo Bà Chiểu",
        address: "254 Đường Số 8, Phường Thông Tây Hội", image: "../images/gv1.jpg"
      },
      { name: "Bánh xèo rau rừng A Đạt", address: "1 Đường Phạm Văn Đồng, Phường Hạnh Thông", image: "../images/gv2.jpg" },
      { name: "Bánh xèo Bé Diệp", address: " 53 Đường Phạm Văn Đồng, Phường Hạnh Thông", image: "../images/gv3.jpg" }
    ],
    "thu-duc": [
      { name: "Quán Bà Già - Bánh Xèo Bến Tre", address: " 3 Đường Số 9, Phường Linh Xuân", image: "../images/td1.jpg" },
      { name: "Bánh Xèo Miền Trung - Bánh Xèo Nhân Thịt Vịt", address: "8A đường số 10, khu phố 2, Phường Hiệp Bình", image: "../images/td2.jpg" },
      { name: "Quán Bánh Xèo Rau Rừng Thủ Đức", address: "271a Nguyễn Văn Tăng, Phường Tăng Nhơn Phú", image: "../images/td3.jfif" }
    ],
    "binh-thanh": [
      { name: "Bánh Xèo Bình Định Nẫu Ơi", address: " 63B Ung Văn Khiêm, Phường Thạnh Mỹ Tây", image: "../images/bt1.jpg" },
      { name: "Bánh Xèo Bình Thuận", address: "22 Huỳnh Đình Hai, Phường Bình Thạnh", image: "../images/bt3.jfif" },
      { name: "Bánh Xèo Tôm Nhảy Thanh Diệu", address: "52 Ung Văn Khiêm, Phường Thạnh Mỹ Tây", image: "../images/bt2.jpg" },
      { name: "Bánh Xèo Tôm Nhảy Thanh Diệu", address: "356 Đ. Phan Văn Trị, Phường Bình Lợi Trung", image: "../images/bt4.jpg" }
    ],
    "quan-1": [
      { name: "Bánh xèo cô Năm", address: " 391/3 Trần Hưng Đạo, phường Cầu Ông Lãnh", image: "../images/q1_1.jpg" },
      { name: "Bánh xèo Hoàng Tâm _ Món ngon miền Tây", address: "TK22/1 Nguyễn Cảnh Chân, P. Cầu Ông Lãnh", image: "../images/q1_2.jpg" },
      { name: "Bánh xèo Phố Ngon 37", address: "L5 - 08D, Tầng 5, Saigon Centre, 65 Lê Lợi, phường Sài Gòn", image: "../images/q1_3.jpg" },
      { name: "Quán Chị Châu", address: " Kiot 2 Chợ Thái Bình, phường Bến Thành", image: "../images/q1_4.jpg" }
    ],

    "quan-3": [
      { name: "Quán bánh xèo Ăn là Ghiền", address: "11A Tú Xương, Phường Xuân Hòa", image: "../images/q3_2.jpg" },
      { name: "Quán bánh xèo Điện Biên Phủ", address: "335 Điện Biên Phủ, Phường Bàn Cờ", image: "../images/q3_1.jpg" }
    ]
  };

  //Gợi ý khẩu phần ăn dựa theo nhóm người dùng (1 người, cặp đôi, gia đình nhỏ, nhóm lớn)
  //Mỗi nhóm là một key, giá trị là mảng các câu gợi ý
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
      "Gợi ý gọi đa dạng nhân: 2 cái nhân tôm, 2 cái nhân thịt, và thêm 1–2 cái nhân trứng hoặc thập cẩm để đổi vị.",
      "👉 Một phần trà đá hoặc nước mía là lựa chọn tuyệt vời để kết thúc bữa ăn."
    ],
    "smallFamily": [
      "Với một gia đình nhỏ, nên gọi 8–12 cái bánh xèo. Trẻ em thường ăn 2 cái, người lớn 3 cái.",
      "Nên chọn nhiều loại nhân: thịt - tôm - trứng - mực hoặc thập cẩm để bữa ăn thêm phần hấp dẫn.",
      "👉 Nên gọi thêm nước chấm pha đậm vị, rau sống, và có thể gọi kèm thêm nem lụi, bánh tráng hoặc bún để bữa ăn phong phú hơn."
    ],
    "largeGroup": [
      "Với đại gia đình hoặc nhóm bạn đông người, nên chuẩn bị khẩu phần khoảng 25–35 cái bánh xèo, tùy sức ăn và độ lớn của bánh. Mỗi người thường ăn từ 2–3 cái",
      "Chắc chắn là phải gọi đa dạng nhân để mọi người có thể thưởng thức: 10 cái nhân tôm, 10 cái nhân thịt, 5 cái nhân trứng và thập cẩm.",
      " Đừng quên bảo nhân viên chuẩn bị nhiều rau sống, nước chấm và có thể thêm các món ăn kèm như bánh tráng, nem lụi để bữa tiệc thêm phần phong phú."
    ]
  };

  // Lấy các phần tử DOM dùng cho tính năng gợi ý quán ăn
  const suggestRestaurantBtn = document.getElementById('suggestRestaurantBtn'); // Nút gợi ý
  const areaSelect = document.getElementById('areaSelect'); // Dropdown chọn khu vực
  const restaurantsList = document.getElementById('restaurantsList'); // Div hiển thị danh sách quán ăn

  // Gắn sự kiện click cho nút "Gợi ý quán ăn"
  suggestRestaurantBtn.addEventListener('click', function () {
    const selectedArea = areaSelect.value; // Lấy khu vực đã chọn
    const selectedRestaurants = restaurants[selectedArea]; // Lấy danh sách quán ứng với khu vực

    // Tạo tiêu đề danh sách quán ăn
    restaurantsList.innerHTML = `<h4>Danh sách các quán ở khu vực ${areaSelect.options[areaSelect.selectedIndex].text}:</h4>`;

    // Tạo danh sách <ul> và thêm từng quán ăn dưới dạng <li> có ảnh
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    selectedRestaurants.forEach(restaurant => {
      const li = document.createElement('li');
      li.style.marginBottom = '15px';
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.gap = '15px';

      if (restaurant.image) {
        const img = document.createElement('img');
        img.src = restaurant.image;
        img.alt = restaurant.name;
        img.style.width = '100px';
        img.style.height = '70px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '8px';
        li.appendChild(img);
      }

      const infoDiv = document.createElement('div');
      infoDiv.innerHTML = `<strong>${restaurant.name}</strong><br>${restaurant.address}`;
      li.appendChild(infoDiv);

      ul.appendChild(li);
    });

    restaurantsList.appendChild(ul);
  });

  //Lấy các phần tử DOM dùng cho tính năng gợi ý khẩu phần
  const portionSelect = document.getElementById('portionSelect'); // Dropdown chọn nhóm người ăn
  const portionSuggestionsDiv = document.getElementById('portionSuggestions'); // Div hiển thị gợi ý khẩu phần

  //Gắn sự kiện thay đổi khi người dùng chọn nhóm (1 người, cặp đôi,...)
  portionSelect.addEventListener('change', function () {
    const selectedPortion = portionSelect.value; // Lấy loại nhóm được chọn
    const selectedSuggestions = portionSuggestions[selectedPortion]; // Lấy gợi ý tương ứng
//Người dùng đổi lựa chọn trong dropdown →
    //  Sự kiện 'change' kích hoạt → Lấy value của lựa chọn đó → 
    // Tra cứu object portionSuggestions để lấy danh sách gợi ý phù hợp.
    // Tạo tiêu đề phần gợi ý
    portionSuggestionsDiv.innerHTML = `<h4>Gợi Ý Khẩu Phần cho ${portionSelect.options[portionSelect.selectedIndex].text}:</h4>`;

    // Tạo danh sách <ul> chứa các gợi ý
    const ul = document.createElement('ul');
    selectedSuggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      ul.appendChild(li);
    });

    // Hiển thị danh sách gợi ý ra giao diện
    portionSuggestionsDiv.appendChild(ul);
  });

});
