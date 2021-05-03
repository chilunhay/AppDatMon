import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
const HomeScreen = ({navigation}) => {
  const categoryData = [
    {
      id: 1,
      name: 'Cơm',
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Mì',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: 'Salads',
      icon: icons.salad,
    },
    {
      id: 5,
      name: 'Bánh Burger',
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 7,
      name: 'Snacks',
      icon: icons.fries,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 9,
      name: 'Tráng miệng',
      icon: icons.donut,
    },
    {
      id: 10,
      name: 'Đồ uống',
      icon: icons.drink,
    },
  ];
  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: 'Cơm',
      rating: 4.8,
      categories: [1],
      photo: images.nasi_lemak,
      duration: '30 - 45 phút',
      menu: [
        {
          menuId: 1,
          name: 'Cơm Nasi Lemak',
          photo: images.nasi_lemak,
          description: 'Một món cơm truyền thống của người Mã Lai',
          price: 40000,
        },
        {
          menuId: 2,
          name: 'Cơm Nasi Briyani với thịt cừu',
          photo: images.nasi_briyani_mutton,
          description: 'Món cơm truyền thống của Ấn Độ với thịt cừu',
          price: 50000,
        },
      ],
    },
    {
      id: 2,
      name: 'Mì',
      rating: 4.8,
      categories: [2],
      photo: images.kolo_mee,
      duration: '20 - 30 phút',
      menu: [
        {
          menuId: 3,
          name: 'Mì xá xíu',
          photo: images.kolo_mee,
          description: 'Mì với xá xíu',
          price: 40000,
        },
        {
          menuId: 4,
          name: 'Pasta cà chua',
          photo: images.tomato_pasta,
          description: 'Pasta cùng với sốt cà chua tươi',
          price: 70000,
        },
      ],
    },
    {
      id: 3,
      name: 'Hot Dogs',
      rating: 4.8,
      categories: [3],
      photo: images.hot_dog_restaurant,
      duration: '20 - 30 phút',
      menu: [
        {
          menuId: 5,
          name: 'Hot Dogs Chicago',
          photo: images.chicago_hot_dog,
          description: 'Hot Dog với cà chua tươi và thịt bò',
          price: 30000,
        },
      ],
    },
    {
      id: 4,
      name: 'Salads',
      rating: 4.8,
      categories: [4],
      photo: images.salad,
      duration: '20 - 30 phút',
      menu: [
        {
          menuId: 6,
          name: 'Xà lách cắt nhỏ kiểu Địa Trung Hải',
          photo: images.salad,
          description: 'Xà lách, cà chua, dưa chuột thái nhỏ',
          price: 40000,
        },
      ],
    },
    {
      id: 5,
      name: 'Bánh Burger',
      rating: 4.8,
      categories: [5],
      photo: images.burger_restaurant_1,
      duration: '20 - 30 phút',
      menu: [
        {
          menuId: 7,
          name: 'Burger gà giòn',
          photo: images.crispy_chicken_burger,
          description: 'Burger với gà giòn, phô mai và rau diếp',
          price: 50000,
        },
        {
          menuId: 8,
          name: 'Burger gà giòn với mù tạt mật ong',
          photo: images.honey_mustard_chicken_burger,
          description: 'Burger gà giòn với xà lách trộn mù tạt mật ong',
          price: 55000,
        },
      ],
    },
    {
      id: 6,
      name: 'Pizza',
      rating: 4.9,
      categories: [6],
      photo: images.pizza_restaurant,
      duration: '30 - 40 phút',
      menu: [
        {
          menuId: 9,
          name: 'Hawaii Pizza',
          photo: images.hawaiian_pizza,
          description: 'Thịt xông khói Canada, vỏ bánh pizza tự làm, sốt pizza',
          price: 80000,
        },
      ],
    },
    {
      id: 7,
      name: 'Snack',
      rating: 4.9,
      categories: [7],
      photo: images.baked_fries,
      duration: '30 - 40 phút',
      menu: [
        {
          menuId: 10,
          name: 'Khoai tây chiên nướng giòn',
          photo: images.hawaiian_pizza,
          description: 'Khoai tây chiên nướng giòn',
          price: 20000,
        },
      ],
    },
    {
      id: 8,
      name: 'Sushi',
      rating: 5.0,
      categories: [8],
      photo: images.japanese_restaurant,
      duration: '20 - 30 phút',
      menu: [
        {
          menuId: 11,
          name: 'Đá bào',
          photo: images.ice_kacang,
          description: 'Cá hồi tươi, cơm sushi, bơ tươi ngon',
          price: 200000,
        },
      ],
    },
    {
      id: 9,
      name: 'Tráng miệng',
      rating: 4.5,
      categories: [9],
      photo: images.ice_kacang,
      duration: '10 - 20 phút',
      menu: [
        {
          menuId: 10,
          name: 'Sushi đặc biệt',
          photo: images.sushi,
          description: 'Đá bào đậu đỏ',
          price: 20000,
        },
      ],
    },
    {
      id: 10,
      name: 'Đồ uống',
      rating: 4.8,
      categories: [10],
      photo: images.teh_c_peng,
      duration: '10 - 20 phút',
      menu: [
        {
          menuId: 11,
          name: 'Trà sữa',
          photo: images.teh_c_peng,
          description: 'Trà sữa nhà làm',
          price: 40000,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) return category[0].name;

    return '';
  }

  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Các món ăn</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2}}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
          })
        }>
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{...FONTS.body2}}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
          }}>
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3}}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {item.categories.map(categoryId => {
              return (
                <View style={{flexDirection: 'row'}} key={categoryId}>
                  <Text style={{...FONTS.body3}}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                </View>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
