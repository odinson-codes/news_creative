type Pagination={
    count: Int;
    limit: Int;
    offset: Int;
    totoal: Int;
}

type NewsResponse ={
    pagination:Pagination;
    data: ArticleData[];
}


type Category = 
 |   "General"
 |  "Business"
 |  "Entairtainment"
 |  "Health"
 |  "Science"
 |  "Sports"
 |  "Technology";
