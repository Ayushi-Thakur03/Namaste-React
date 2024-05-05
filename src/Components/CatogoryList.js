const CatogoryList = ({category})=>{
    // console.log(category)
    return(
        <div className="text-center">
                {category?.map((cat)=>{
                    (
                        <div key={cat.title}>
                            <span >{cat.title}</span>
                            </div>
                    )
                }

                )}
        </div>
    )
};

export default CatogoryList;