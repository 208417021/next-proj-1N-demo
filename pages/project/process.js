import Layout from '../../components/Layout2';

export default function process() {
    return (
        <Layout>
            <strike>Kill me plz</strike>
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
        </Layout>
    )
}
