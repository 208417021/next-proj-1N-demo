import Layout from '../../components/Layout2';
import styles from '../../styles/Process.module.css'

export default function process() {
    return (
        <Layout title="Process">
            感謝老師辛苦指導<strike className={styles.hide}>，淡江大學成功讓我對Python以及Nodejs前後端失去自信以及熱忱，未來我如果踏入相關行業我就是棒槌</strike>
            <p>1. 先把老師在Teams上的next-proj-1N-demo.zip、mealDB-theme.zip下載下來</p>
            <p>2. 建立pages/project/meals.js並把老師的mealDB內的index.html整理成meals</p>
            <p>3. 建立styles/Meals.module.css並把mealDB內的css複製過來</p>
            <p>4. 發現並修正CSS全域Selector(如*符號或是body)無法使用，直接複製至global.css，module只留有ID或Class之Selector</p>
            <p>5. 修正Font Awesome無法正常顯示的問題</p>
            <p>6. 透過老師的講義，複製三筆資料，建立meals-data.js</p>
            <p>7. 依照老師的講義，以及Teams上所需求，完成剩下部分，測試data讀取正常</p>
            <p>8. 套上Navbar並新增此頁及簡單說明製作過程</p>
            <p>9. 新增GitHub Respository，繳交作業</p>
            <p>10. 由於run dev不會報錯，因此並無發現問題，Vercel一直建置失敗，npm run build發現錯誤，修正global.css格式錯誤導致Vercel失敗的問題</p>
            <br />
            <p>6/14專題完成內容</p>
            <p>1. Navbar resposive一直失效，查了許多相關資料，發現Function Compoent可以克服目前遇到之問題，</p>
            <p>　 改用Function Compoent替代原本的Function(此過程耗費我6小時的時間)</p>
            <p>　 並認識className在React Compoent運作大致原理(state改變時就會產生新的object)</p>
            <p>2. 完成Navbar、Footer、Layout</p>
            <p>3. 依照專題所求，嘗試不少網路資源來完成首頁，目前使用簡單card的待之後可以放入學校<a className={styles.hide}>的垃圾</a>作業</p>
            <p>4. 依照專題所求，建立StrAPI app，並push至GitHub<a className={styles.hide}>，但我實在不知道StrAPI到底要用來幹嘛</a></p>
            <br />
            <p>6/20完成部分</p>
            <p>1. 確認老師的Strapi範例多出來部分(如：import/export plugin)，並且補上</p>
            <p>2. Strapi post到Cloudinary正常，一張圖片生成三張圖(原始、預覽用、壓縮圖)</p>
            <p>3. 將Strapi depoly部屬至Heroku</p>
            <p>4. 為配合Project需求，參考網路資源；建立Shop頁面，使得Strapi之上傳圖片可以被運用到</p>
            <p>5. 修改一些細節(navbar連結、每頁title、首頁Index連結等)</p>
        </Layout>
    )
}
