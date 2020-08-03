(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["raspios"],{6971:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspios"},[a("h1",{staticClass:"raspi_h01"},[t._v("概要")]),a("p",[t._v(" Raspberry PiのOSセットアップからSSH接続までの手順を説明します。 ")]),a("div",{staticStyle:{height:"40px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content01"}},[t._v(t._s(t.navListsRaspi[0].name))]),t._m(0),a("li",[t._v("microSDカード")]),a("li",[t._v("電源アダプター")]),a("li",[t._v("ディスプレイ（接続用のHDMIケーブル含む）")]),a("li",[t._v("USBマウス")]),a("li",[t._v("USBキーボード")]),a("li",[t._v("LANケーブル（今回は有線でネットワークに接続します）")]),a("li",[t._v("PC（インターネットに接続できるもの）")]),a("li",[t._v("microSDカードをPCに接続するためのアダプター")]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content02"}},[t._v(t._s(t.navListsRaspi[1].name))]),t._m(1),a("p",[t._v(" フォーマット形式を選択できるソフトを使用して"),a("b",[a("font",{attrs:{color:"red"}},[t._v("FAT32形式")])],1),t._v("で実行してください。"),a("br"),t._v(" 私はSDメモリカードフォーマッターを使用しました。 ")]),a("a",{attrs:{href:"https://www.sdcard.org/jp/downloads/formatter/",target:"_blank"}},[t._v("SDメモリカードフォーマッター – SD Association")]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content03"}},[t._v(t._s(t.navListsRaspi[2].name))]),a("p",[t._v(" OSのインストーラー「NOOBS」をダウンロードします。 ")]),a("p",[t._v(" 以下のリンク先で"),a("b",[a("font",{attrs:{color:"red"}},[t._v("NOOBS Lite")])],1),t._v("のZipファイルをダウンロードしてください。 ")]),a("a",{attrs:{href:"https://www.raspberrypi.org/downloads/noobs/",target:"_blank"}},[t._v("NOOBS ダウンロード")]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content04"}},[t._v(t._s(t.navListsRaspi[3].name))]),a("p",[t._v(" microSDカードにNOOBS Liteを書き込みます。 ")]),a("p",[t._v(" ダウンロードしたNOOBS LiteのZipファイルを解凍してください。"),a("br"),t._v(" その後、解凍後フォルダの"),a("b",[a("font",{attrs:{color:"red"}},[t._v("中身のみを")])],1),t._v("microSDカードのルート直下にコピーしてください。 ")]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content05"}},[t._v(t._s(t.navListsRaspi[4].name))]),a("p",[t._v(" Raspberry Piを起動します。 ")]),t._m(2),a("p",[t._v(" 起動してしばらくディスプレイにカラフルな画面が表示され、その後OSのインストーラー画面が表示されたら成功です。 ")]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content06"}},[t._v(t._s(t.navListsRaspi[5].name))]),a("p",[t._v(" Raspberry PiにOSをインストールします。 ")]),t._m(3),a("p",[t._v(" 画面に表示されているリストの中から"),a("b",[a("font",{attrs:{color:"red"}},[t._v("「Raspberry Pi OS Lite (32-bit)」")])],1),t._v("にチェックを入れ、画面左上の「インストール」ボタンを押してOSのインストールを実行してください。 ")]),t._m(4),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content07"}},[t._v(t._s(t.navListsRaspi[6].name))]),a("p",[t._v(" Raspberry Piに固定のIPアドレスを設定します。 ")]),a("p",[t._v(" Raspberry Piのターミナルにて以下のコマンドを入力し、IPアドレス設定を行うファイルを開いてください。 ")]),t._m(5),t._m(6),t._m(7),a("p",[t._v(" ip_addressには設定する固定IPアドレスを、routersとdomain_name_serversにはルーターのIPアドレスを入力します。 ")]),t._m(8),t._m(9),t._m(10),t._m(11),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content08"}},[t._v(t._s(t.navListsRaspi[7].name))]),a("p",[t._v(" Raspberry PiのSSH設定を行います。 ")]),a("p",[t._v(" Raspberry Piのターミナルにて以下のコマンドを入力し、設定メニューを開いてください。 ")]),t._m(12),t._m(13),a("p",[t._v(' "The SSH server is enabled"というメッセージが表示されたら、SSHの設定は完了です。 ')]),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content09"}},[t._v(t._s(t.navListsRaspi[8].name))]),a("p",[t._v(" Raspberry PiへのSSH接続テストを行います。 ")]),a("p",[t._v(" Raspberry Piと同じネットワーク上のPCにて、ターミナルに以下のコマンドを入力してください。 ")]),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v(" といったように表示されます。 ")]),t._m(18),a("div",{staticStyle:{height:"60px"}}),a("h2",{staticClass:"raspi_h02",attrs:{id:"content10"}},[t._v(t._s(t.navListsRaspi[9].name))]),a("p",[t._v(" Raspberry PiへのSSH接続を終了します。 ")]),a("p",[t._v(" Raspberry PiはそのままでSSH通信のみ終了する場合は、PCのターミナルに以下のコマンドを入力してください。 ")]),t._m(19),t._m(20),t._m(21),a("div",{staticStyle:{height:"30px"}})])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("Raspberry Pi（今回は"),a("b",[t._v("Raspberry Pi 4B (4GB) ")]),t._v("を用いた例を紹介します）")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" PCにmicroSDカードを接続して、フォーマットを実行します。"),a("br")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" NOOBS Liteを書き込んだmicroSDカードをPCから取り出し、Raspberry Piに差し込んでください。"),a("br"),t._v(" その後、Raspberry Piの各端子にディスプレイ・マウス・キーボード・LANケーブルを接続してください。"),a("br"),t._v(" 最後に電源アダプターを接続すると自動的に起動します。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" 起動直後はインストーラー画面の言語が英語になっていると思います。"),a("br"),t._v(" この場合、画面下部のLanguageをEnglishから日本語に切り替えてください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" 「OSのインストールに成功しました」のメッセージが表示されたら成功です。"),a("br"),t._v(" 「OK」を押すとRaspberry Piが再起動します。"),a("br"),t._v(" もし再起動しない場合は、一度電源アダプタを抜いた後に再度差し込んで電源を入れ直してください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル")]),a("p",[t._v(" $ sudo vi /etc/dhcpcd.conf ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("br"),t._v(" 開いたファイルの末尾に以下の内容を追加し、上書き保存してください。"),a("br"),t._v(" ファイルの編集や保存の操作については、"),a("a",{attrs:{href:"https://eng-entrance.com/linux-command-vi",target:"_blank"}},[t._v("こちらのサイト")]),t._v("などを参考にしてください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("/etc/dhcpcd.conf の末尾")]),a("p",[t._v(" interface eth0"),a("br"),t._v(" static ip_address=192.168.xxx.xxx"),a("br"),t._v(" static routers=192.168.xxx.xxx"),a("br"),t._v(" static domain_name_servers=192.168.xxx.xxx ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("br"),t._v(" 上書き保存後、設定を反映させるために以下のコマンドで再起動を実行してください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル")]),a("p",[t._v(" $ sudo shutdown -r now ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("br"),t._v(" 再起動後、以下のコマンドで固定IPアドレスが正しく設定されていることを確認してください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル")]),a("p",[t._v(" $ ifconfig ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル")]),a("p",[t._v(" $ sudo raspi-config ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("br"),t._v(' 開いた設定メニューにて、"5 Interfacing Options"→"P2 SSH"の順で選択してください。'),a("br"),t._v(' すると"Would you like the SSH server to be enabled?"と聞かれるので、"はい”を選んでください。 ')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル（SSH接続用PC）")]),a("p",[t._v(" $ ssh pi@192.168.xxx.xxx ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" IPアドレスはRaspberry Piに設定した固定IPアドレスです。"),a("br"),t._v(' 上記コマンド入力により、SSH通信でユーザー名"Pi"としてRaspberry Piにログインを試みます。 ')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(' パスワードを要求されるので、"raspberry"と入力してください（規定のパスワード）。'),a("br"),t._v(" 接続に成功すると、ターミナルの現在行には ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル（SSH接続用PC）")]),a("p",[t._v(" pi@raspberrypi ~ $ ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" 以後はPCからRaspberry Piの操作が出来るため、Raspberry Piに接続しているディスプレイやマウス、キーボードは"),a("br"),t._v(" 外してもらっても構いません。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル（SSH接続用PC）")]),a("p",[t._v(" $ exit ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("br"),t._v(" Raspberry Piをシャットダウンする場合は、以下のコマンドを入力してください。 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"raspi_box01"},[a("h3",{staticClass:"ttl"},[t._v("ターミナル（SSH接続用PC）")]),a("p",[t._v(" $ sudo shutdown -h now ")])])}],r={data:function(){return{navListsRaspi:[{name:"準備するもの",link:"/raspios",hash:"#content01"},{name:"microSDカードのフォーマット",link:"/raspios",hash:"#content02"},{name:"NOOBSダウンロード",link:"/raspios",hash:"#content03"},{name:"NOOBS書き込み",link:"/raspios",hash:"#content04"},{name:"Raspberry Piの起動",link:"/raspios",hash:"#content05"},{name:"OSインストール",link:"/raspios",hash:"#content06"},{name:"固定IPアドレスの設定",link:"/raspios",hash:"#content07"},{name:"SSH設定",link:"/raspios",hash:"#content08"},{name:"SSH接続テスト",link:"/raspios",hash:"#content09"},{name:"SSH接続終了",link:"/raspios",hash:"#content10"}]}},methods:{setRaspiLists:function(){this.$store.commit("setDrawer",!0),this.$store.commit("setNavLists",this.navListsRaspi)}},created:function(){this.setRaspiLists()}},n=r,_=(a("e02c"),a("2877")),c=Object(_["a"])(n,e,i,!1,null,"736b1254",null);s["default"]=c.exports},a8fa:function(t,s,a){},e02c:function(t,s,a){"use strict";var e=a("a8fa"),i=a.n(e);i.a}}]);
//# sourceMappingURL=raspios.1eff5b92.js.map