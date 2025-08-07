declare namespace AdlogFetch {
    namespace naverShoppingRankCheck {
        interface Options {
            page_rows?: 20 | 50 | 100;
        }
        interface Item {
            keyword: string;
            keywordLink: string | null;
            productId: number;
            productName: string;
            productLink: string | null;
            rank: number | null;
            date: string;
        }
        interface Result {
            nextPage: number | null;
            totalPage: number;
            totalCount: number;
            list: Item[];
        }
    }
}
declare class AdlogFetch {
    private readonly host;
    private readonly userAgent;
    private cookieJar;
    private id;
    private pw;
    constructor(id: string, pw: string);
    login(): Promise<void>;
    naverShoppingRankCheck(page?: number, options?: AdlogFetch.naverShoppingRankCheck.Options): Promise<{
        nextPage: number | null;
        totalPage: number;
        totalCount: number;
        list: AdlogFetch.naverShoppingRankCheck.Item[];
    }>;
}
export default AdlogFetch;
