# **Shifru**

シフト管理アプリケーション

<a href="https://www.shifru.jp/login">
    <img width="100%" alt="トップページ" src="" />
</a>

### アプリ URL: https://www.shifru.jp/login

<br>

## **概要**

---

**Shifru** は、飲食店のシフト管理を効率化するためのアプリケーションです。私が働く、飲食店のシフト管理は紙やエクセルなどを使ったアナログな方法が主流であり、店長はスタッフの希望シフトを個別に収集し、作成したシフトを1枚の紙に印刷して共有していました。これが業務効率を低下させたり、シフト共有の妨げなっていたりしました。
**Shifru** は、こうした課題を解決するために開発されたシフト管理アプリです。店長・スタッフそれぞれの役割に応じた機能を提供し、希望シフトの提出、シフトの閲覧、そして最終シフトを全スタッフに共有するところまでをスムーズに行えるようサポートします。従来の煩雑なアナログ管理をデジタル化することで、業務負担を軽減し、効率的なシフト運用を実現します。

<br>

## **ペルソナと現状の課題**

---

店長１名とスタッフ２名ほどを書く
現状の困っていることを書く実際のシフトの写真など

現在、以下の機能が実装されています。

<br>

## **主な機能**

---

Shifruでは、利用者の役割に応じて3種類の権限が設定されています。
3種類の権限：「管理者」「店長」「スタッフ」

<br>

#### **1. 管理者**

管理者は、複数の店舗をエリア単位で管理し、店長の登録を行う役割を持ちます。

- **エリア登録**：複数の店舗をエリア単位で管理可能
  - _例：エリアマネージャーが管轄エリアを設定_
- **店舗登録**：新規店舗の登録
  - _例：新しい店舗を追加し、店長をアサインする際に使用_
- **店長登録**：各店舗の責任者として店長を設定

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="document/shifru_pictures/エリア登録.png" >
      <br>
      <b>エリア登録画面</b>
    </td>
    <td align="center">
      <img src="document/shifru_pictures/店舗登録.png" >
      <br>
      <b>店舗登録画面</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="document/shifru_pictures/店長登録.png" >
      <br>
      <b>店長登録画面</b>
    </td>
  </tr>
</table>

</div>

---

#### **2. 店長**

店長は、自身の店舗のスタッフを管理し、シフトの確認を行います。

- **スタッフ登録**：従業員の登録
  - _例：新しくアルバイトを雇用した際に登録_
- **シフト閲覧**：店舗スタッフのシフトを確認
  - _例：全体のシフトを確認し、穴がある日程を把握_

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="document/shifru_pictures/スタッフ登録.png" >
      <br>
      <b>スタッフ登録画面</b>
    </td>
    <td align="center">
      <img src="document/shifru_pictures/全体シフト閲覧.png" >
      <br>
      <b>シフト閲覧画面</b>
    </td>
  </tr>
</table>

</div>

---

#### **3. スタッフ**

スタッフは自身のシフトを登録・確認し、必要に応じて修正を行えます。

- **個人シフト閲覧**：自身のシフトを確認
  - _例：自分の勤務スケジュールをアプリでいつでも確認_
- **全体シフト閲覧**：店舗のシフトを確認
  - _なぜ必要？_
    - 自分のシフトだけでなく、他のスタッフのシフトも把握することで、交換依頼や勤務調整がスムーズにできる。
- **シフト登録&編集**：希望シフトを提出
  - _例：毎月20日までに来月前半のシフト希望を登録_
  - _例：毎月 5日までに今月後半のシフト希望を登録_
- **シフト削除**：登録済みのシフトを削除
  - _例：期限内であれば、シフトの削除が可能_

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="document/shifru_pictures/スタッフトップページ.jpg">
      <br>
      <b>個人シフト閲覧</b>
    </td>
    <td align="center">
      <img src="document/shifru_pictures/シフト登録.jpg" >
      <br>
      <b>シフト登録&編集&削除</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="document/shifru_pictures/スタッフ全体シフトランチ.jpg"">
      <br>
      <b>全体シフト閲覧</b>
    </td>
    <td align="center">
      <img src="document/shifru_pictures/スタッフ全体シフトディナー.jpg">
      <br>
      <b>全体シフト閲覧</b>
    </td>
  </tr>
</table>

</div>

<br>

### **画面遷移図**

---

#### **1. 管理者**

<img src="document/shifru_pictures/管理者画面遷移図.png" alt="管理者画面遷移図" title="管理者画面遷移図">

#### **2. 店長**

<img src="document/shifru_pictures/店長画面遷移図.png" alt="店長画面遷移図" title="店長画面遷移図">

#### **3. スタッフ**

<img src="document/shifru_pictures/スタッフ画面遷移図.png" alt="スタッフ画面遷移図" title="スタッフ画面遷移図">

<br>

### **使用技術**

---

### **使用技術**

#### **フロントエンド**

- **言語**: HTML, CSS, JavaScript
- **ライブラリ**: React `^18`, Jotai `^2.10.3`
- **フレームワーク**: Next.js `^14.2.14`, Tailwind CSS `^3.4.1`, shadcn/ui
- **ツール**: ESLint `^8`, Prettier
- **データフェッチ**: Axios `^1.7.7`

#### **バックエンド**

- **言語**: Ruby `3.3.5`
- **フレームワーク**: Ruby on Rails `~> 7.0.8, >= 7.0.8.4`
- **セキュリティ・認証**:
  - bcrypt `~> 3.1.7`（パスワードハッシュ化）
  - JWT（JSON Web Token）
- **CORS制御**: rack-cors
- **開発ツール**:
  - 静的解析: RuboCop
  - Dockerサポート: dockerfile-rails `~> 1.6.25`

#### **データベース**

- MySQL `8.4`

#### **API設計**

- RESTful API

#### **認証・認可**

- JSON Web Token (JWT)

#### **状態管理**

- Jotai `^2.10.3`

#### **ログ・監視**

- Vercel・Fly.ioのログ機能を使用（エラーログ・アクセスログの確認）

#### **テスト**

- RSpec（バックエンド）

#### **インフラ・開発環境**

- **ホスティング・デプロイ**:
  - **フロントエンド**: Vercel（GitHub連携による自動デプロイ）
  - **バックエンド**: Fly.io
  - **データベース**: Fly.io
- **CI/CD**: Vercelの自動デプロイ機能
- **開発環境**:
  - **Docker（フロントエンド・バックエンド・データベース全体で使用）**
  - **バックエンドのDockerfile**:
    - **開発用**: `Dockerfile.dev`
    - **本番用**: `Dockerfile`
- **リポジトリ管理**: GitHub

---

[インフラ構成図のイメージをここに追加]  
Shifruのインフラは、フロントエンド（Next.js）を**Vercel**、バックエンド（Rails API）を**Fly.io**でホスティングし、データベースは**MySQL 8.4**を使用しています。  
Dockerを活用し、開発環境と本番環境を統一する設計になっています。
要確認!!!

<br>

## **ER図**

---

<img src="document/shifru_pictures/ShifruER図.png" alt="ShifruER図" title="ShifruER図">

- **エリア**（areas）: エリア単位で店舗を管理
- **店舗**（stores）: 店舗ごとのシフトを管理
- **店長**（managers）: 店舗の責任者
- **スタッフ**（staffs）: シフトに登録可能な従業員
- **シフト**（shifts）: スタッフのシフト情報

<br>

## **今後の予定**

---

何か書く
