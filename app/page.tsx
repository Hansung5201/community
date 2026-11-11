import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main style={{ padding: "40px"}}>
            <h1>My Community</h1>
            <h2>전체 게시물</h2>
            <p>아직 작성된 계시물이 없습니다.</p>
        </main>
    );
}
