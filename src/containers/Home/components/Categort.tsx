import { CategoriesType } from "../type"


export type CategoryPropsType = {
    categories: CategoriesType | undefined
}


function Category(props: CategoryPropsType) {
    const { categories } = props;
    return (
        <div className="category">
            {categories?.map((item) => {
                return <div className="category-item" key={item.id}>
                    <img className="category-item-img" src={item.imgUrl} alt={item.name} />
                    <p className="category-item-title">{item.name}</p>
                </div>
            })}
        </div>
    )
}


export default Category;


