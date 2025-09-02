import CategoryCard from '../shaded/CategoryCard';
import ProductCard from '../shaded/ProductCard';

const CentralPanel = () => {
  return (
    <div className="lg:col-span-7">
      {/* explore categories */}
      <div className="p-3">
        <h2 className="text-lg font-medium mb-4">Explore categories</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <CategoryCard categoryName="Burgers" src="/burger.svg" active />
          <CategoryCard categoryName="Donuts" src="/donut.svg" />
          <CategoryCard categoryName="Desserts" src="/ice-cream.svg" />
          <CategoryCard categoryName="Drinks" src="/soda.svg" />
          <CategoryCard categoryName="Pizza" src="/pizza.svg" />
          <CategoryCard categoryName="Fries" src="/fries.svg" />
          <CategoryCard categoryName="Salad" src="/salad.svg" />
          <CategoryCard categoryName="Veggie" src="/veggie.svg" />
          <CategoryCard categoryName="Fruit" src="/fruit.svg" />
          <CategoryCard categoryName="Coffee" src="/coffee.svg" />
        </div>
      </div>
      {/* Products cards */}
      <div className="p-3">
        <h2 className="text-lg font-medium mb-4">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aquí irán las tarjetas de productos */}
          <ProductCard
            imageSrc="/burger-6.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-2.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
          <ProductCard
            imageSrc="/burger-3.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-4.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
          <ProductCard
            imageSrc="/burger-5.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-2.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
          <ProductCard
            imageSrc="/burger-6.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-2.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
          <ProductCard
            imageSrc="/burger-3.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-4.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
          <ProductCard
            imageSrc="/burger-5.png"
            productName="Delicious Burger"
            currentPrice="$12.99"
            oldPrice="$15.00"
            rating={4.5}
            reviews={245}
            isWishlisted={true}
            isSelected={true}
          />
          <ProductCard
            imageSrc="/burger-2.png"
            productName="Spicy Pizza"
            currentPrice="$18.50"
            oldPrice="$20.00"
            rating={5}
            reviews={310}
            isWishlisted={false}
            isSelected={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CentralPanel;
