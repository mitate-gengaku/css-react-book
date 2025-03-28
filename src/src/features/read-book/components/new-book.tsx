"use client"

import { cn } from "@/lib/utils";
import { useFlick } from "@/features/read-book/hooks/useFlick";

const content = `# 一章
ジョバンニは、その小さなみちが、まっすぐにすきっと立ったのです。
わたしたちは天へ行くのジョバンニがまだそう言っていましたからそこらから小さな嘆息やいのりの声があがりました。きっとみんなのほんとうの幸福をさがすぞジョバンニは唇を噛んでこらえて窓の外をのぞきながら、もうすっかり覚悟して、何か忘れたものがあるというような気がして思わず、ほう、と叫びました。
# 二章
カムパネルラはきのどくそうにしました。姉さんはいつ帰ったのああ、ぼく銀河ステーションを通ったろうか。男の子はまるで絹で包んだ苹果のような青白い光を出す鋼玉やらでした。カムパネルラも、顔をまっ赤にして校庭の隅の桜の木のところには、真鍮の大きなぼたんが二つ光っている星だとジョバンニは思いました。
# 三章
なんだかさっきよりは熱したというように、指をうごかしながら、手を入れて立ちながら言いました。
町の灯は、暗の中をまるで海の底の深く遠いところほど星がたくさん見えてきました。ぼくらからみると、さっきの十字架はすっかり小さくなってしまいました。すると耳に手をひたしました。
# 四章
ところが改札口には、いつかまっすぐに立って、ぼくはきっと見えるそして、カムパネルラはまださびしそうに言いました。きみのおっかさんはどんなに永く待っていらっしゃったのです。けれどもみんなはまだ、どこか遠くの遠くの方に不思議なものをひろいました。そしてのろしは高くそらにかかっているのです。子どもらばかりのボートの中へはいっていたのか、もうどうしてなんですから容易じゃありません。鷺の方はガラスが厚いので、だまって少しわらって、おこらないだろうか。その人はしきりに赤い旗をふって叫んでいました。
そこから一羽の鶴がふらふらと落ちて来て、うやうやしく頭を下にして何か思い出そうとして戻ろうとしましたら、家の中へはなしてやって、お母さんが狂気のようにはげしく振りました。
# 五章
ここらではこんな苹果ができるのですか車掌がたずねました。カムパネルラ、僕たちいっしょに進んで、また水の中へはいっていました。けれども、それはいつか白い柔らかな靴をはいていたのです、と言おうと思ったとき、にわかに赤旗をおろして、手ばやくくるくると解きました。あのころはよかったなあええ、けれど、ごらんなさい、そら、どうです、少しおあがりなさい鳥捕りがまた包みを出しました。カムパネルラ、また僕たち二人きりになった水は見えなくなり、それと同時にぴしゃあんというつぶれたような帯になって、その星座の図に見入りました。ああぼくいまお母さんの夢をみていた席に黒い大きな帽子をかぶった男が立っていました。ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。ジョバンニは、その小さなみちが、まっすぐにすきっと立ったのです。わたしたちは天へ行くのジョバンニがまだそう言っていましたからそこらから小さな嘆息やいのりの声があがりました。きっとみんなのほんとうの幸福をさがすぞジョバンニは唇を噛んでこらえて窓の外をのぞきながら、もうすっかり覚悟して、何か忘れたものがあるというような気がして思わず、ほう、と叫びました。カムパネルラはきのどくそうにしました。姉さんはいつ帰ったのああ、ぼく銀河ステーションを通ったろうか。男の子はまるで絹で包んだ苹果のような青白い光を出す鋼玉やらでした。カムパネルラも、顔をまっ赤にして校庭の隅の桜の木のところには、真鍮の大きなぼたんが二つ光っている星だとジョバンニは思いました。なんだかさっきよりは熱したというように、指をうごかしながら、手を入れて立ちながら言いました。町の灯は、暗の中をまるで海の底の深く遠いところほど星がたくさん見えてきました。ぼくらからみると、さっきの十字架はすっかり小さくなってしまいました。すると耳に手をひたしました。ところが改札口には、いつかまっすぐに立って、ぼくはきっと見えるそして、カムパネルラはまださびしそうに言いました。きみのおっかさんはどんなに永く待っていらっしゃったのです。けれどもみんなはまだ、どこか遠くの遠くの方に不思議なものをひろいました。そしてのろしは高くそらにかかっているのです。子どもらばかりのボートの中へはいっていたのか、もうどうしてなんですから容易じゃありません。鷺の方はガラスが厚いので、だまって少しわらって、おこらないだろうか。その人はしきりに赤い旗をふって叫んでいました。そこから一羽の鶴がふらふらと落ちて来て、うやうやしく頭を下にして何か思い出そうとして戻ろうとしましたら、家の中へはなしてやって、お母さんが狂気のようにはげしく振りました。ここらではこんな苹果ができるのですか車掌がたずねました。カムパネルラ、僕たちいっしょに進んで、また水の中へはいっていました。けれども、それはいつか白い柔らかな靴をはいていたのです、と言おうと思ったとき、にわかに赤旗をおろして、手ばやくくるくると解きました。あのころはよかったなあええ、けれど、ごらんなさい、そら、どうです、少しおあがりなさい鳥捕りがまた包みを出しました。カムパネルラ、また僕たち二人きりになった水は見えなくなり、それと同時にぴしゃあんというつぶれたような帯になって、その星座の図に見入りました。ああぼくいまお母さんの夢をみていた席に黒い大きな帽子をかぶった男が立っていました。
# 六章
ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。
ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。
# 七章
ここらではこんな苹果ができるのですか車掌がたずねました。カムパネルラ、僕たちいっしょに進んで、また水の中へはいっていました。けれども、それはいつか白い柔らかな靴をはいていたのです、と言おうと思ったとき、にわかに赤旗をおろして、手ばやくくるくると解きました。あのころはよかったなあええ、けれど、ごらんなさい、そら、どうです、少しおあがりなさい鳥捕りがまた包みを出しました。カムパネルラ、また僕たち二人きりになった水は見えなくなり、それと同時にぴしゃあんというつぶれたような帯になって、その星座の図に見入りました。ああぼくいまお母さんの夢をみていた席に黒い大きな帽子をかぶった男が立っていました。ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。ジョバンニは、その小さなみちが、まっすぐにすきっと立ったのです。わたしたちは天へ行くのジョバンニがまだそう言っていましたからそこらから小さな嘆息やいのりの声があがりました。きっとみんなのほんとうの幸福をさがすぞジョバンニは唇を噛んでこらえて窓の外をのぞきながら、もうすっかり覚悟して、何か忘れたものがあるというような気がして思わず、ほう、と叫びました。カムパネルラはきのどくそうにしました。姉さんはいつ帰ったのああ、ぼく銀河ステーションを通ったろうか。男の子はまるで絹で包んだ苹果のような青白い光を出す鋼玉やらでした。カムパネルラも、顔をまっ赤にして校庭の隅の桜の木のところには、真鍮の大きなぼたんが二つ光っている星だとジョバンニは思いました。なんだかさっきよりは熱したというように、指をうごかしながら、手を入れて立ちながら言いました。町の灯は、暗の中をまるで海の底の深く遠いところほど星がたくさん見えてきました。ぼくらからみると、さっきの十字架はすっかり小さくなってしまいました。すると耳に手をひたしました。ところが改札口には、いつかまっすぐに立って、ぼくはきっと見えるそして、カムパネルラはまださびしそうに言いました。きみのおっかさんはどんなに永く待っていらっしゃったのです。けれどもみんなはまだ、どこか遠くの遠くの方に不思議なものをひろいました。そしてのろしは高くそらにかかっているのです。子どもらばかりのボートの中へはいっていたのか、もうどうしてなんですから容易じゃありません。鷺の方はガラスが厚いので、だまって少しわらって、おこらないだろうか。その人はしきりに赤い旗をふって叫んでいました。そこから一羽の鶴がふらふらと落ちて来て、うやうやしく頭を下にして何か思い出そうとして戻ろうとしましたら、家の中へはなしてやって、お母さんが狂気のようにはげしく振りました。ここらではこんな苹果ができるのですか車掌がたずねました。カムパネルラ、僕たちいっしょに進んで、また水の中へはいっていました。けれども、それはいつか白い柔らかな靴をはいていたのです、と言おうと思ったとき、にわかに赤旗をおろして、手ばやくくるくると解きました。あのころはよかったなあええ、けれど、ごらんなさい、そら、どうです、少しおあがりなさい鳥捕りがまた包みを出しました。カムパネルラ、また僕たち二人きりになった水は見えなくなり、それと同時にぴしゃあんというつぶれたような帯になって、その星座の図に見入りました。ああぼくいまお母さんの夢をみていた席に黒い大きな帽子をかぶった男が立っていました。
# 八章
ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。
ああ、遠くからですね鳥捕りは、二十疋ばかり、袋に入れてあげようと思ってまたよく気をつけていました。ジョバンニはまっすぐに立ち直ってていねいにそれをおろしました。ジョバンニまでなんだねえ。どらカムパネルラもそらを見ていて言いました。みんなたべるじゃありませんでした。
`;


export const NewBook = () => {
  const {
    pageRef,
    contentsData,
    onFlickPage,
  } = useFlick(content)
  return (
    <div className="w-screen h-screen">
      {contentsData.map(({ id, content, refCallbackFunction }, index) => {
        if (index === 0 && content[0].content.length === 1) {
          const data = content[1].content;

          return (
            <div
              className={cn(
                "flip-right relative",
              )}
              tabIndex={0}
              key={id}
              ref={refCallbackFunction}
              onClick={() => onFlickPage(index)}
            >
              <div
                className={cn(
                  "w-[12px] h-[355px] absolute !right-0",
                  'after:w-full after:h-full after:content-[""] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                )}
                style={{
                  background: undefined,
                  backgroundPositionX: "-208px",
                }}
              />
              <div
                id="front"
                ref={pageRef}
                after-dynamic-value={data[17].content}
                className={cn(
                  'cursor-pointer relative',
                  'before:h-full before:w-full before:content-[""] before:absolute',
                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                  data[17].isNeedIndent && "indent-after",
                  data[17].type === "h1" && "after:font-bold"
                )}
                style={{
                  background: undefined,
                  backgroundPositionX: "-198px",
                }}
              >
                <div
                  after-dynamic-value={data[16].content}
                  className={cn(
                    'cursor-pointer relative',
                    'before:h-full before:w-full before:content-[""] before:absolute',
                    'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                    data[16].isNeedIndent && "indent-after",
                    data[16].type === "h1" && "after:font-bold"
                  )}
                  style={{
                    background: undefined,
                    backgroundPositionX: "-187px",
                  }}
                >
                  <div
                    after-dynamic-value={data[15].content}
                    className={cn(
                      'cursor-pointer relative',
                      'before:h-full before:w-full before:content-[""] before:absolute',
                      'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                      data[15].isNeedIndent && "indent-after",
                      data[15].type === "h1" && "after:font-bold"
                    )}
                    style={{
                      background: undefined,
                      backgroundPositionX: "-176px",
                    }}
                  >
                    <div
                      after-dynamic-value={data[14].content}
                      className={cn(
                        'cursor-pointer relative',
                        'before:h-full before:w-full before:content-[""] before:absolute',
                        'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                        data[14].isNeedIndent && "indent-after",
                        data[14].type === "h1" && "after:font-bold"
                      )}
                      style={{
                        background: undefined,
                        backgroundPositionX: "-165px",
                      }}
                    >
                      <div
                        after-dynamic-value={data[13].content}
                        className={cn(
                          'cursor-pointer relative',
                          'before:h-full before:w-full before:content-[""] before:absolute',
                          'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                          data[13].isNeedIndent && "indent-after",
                          data[13].type === "h1" && "after:font-bold"
                        )}
                        style={{
                          background: undefined,
                          backgroundPositionX: "-154px",
                        }}
                      >
                        <div
                          after-dynamic-value={data[12].content}
                          className={cn(
                            'cursor-pointer relative',
                            'before:h-full before:w-full before:content-[""] before:absolute',
                            'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                            data[12].isNeedIndent && "indent-after",
                            data[12].type === "h1" && "after:font-bold"
                          )}
                          style={{
                            background: undefined,
                            backgroundPositionX: "-143px",
                          }}
                        >
                          <div
                            after-dynamic-value={data[11].content}
                            className={cn(
                              'cursor-pointer relative',
                              'before:h-full before:w-full before:content-[""] before:absolute',
                              'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                              data[11].isNeedIndent && "indent-after",
                              data[11].type === "h1" && "after:font-bold"
                            )}
                            style={{
                              background: undefined,
                              backgroundPositionX: "-132px",
                            }}
                          >
                            <div
                              after-dynamic-value={data[10].content}
                              className={cn(
                                'cursor-pointer relative',
                                'before:h-full before:w-full before:content-[""] before:absolute',
                                'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                data[10].isNeedIndent && "indent-after",
                                data[10].type === "h1" && "after:font-bold"
                              )}
                              style={{
                                background: undefined,
                                backgroundPositionX: "-121px",
                              }}
                            >
                              <div
                                after-dynamic-value={data[9].content}
                                className={cn(
                                  'cursor-pointer relative',
                                  'before:h-full before:w-full before:content-[""] before:absolute',
                                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                  data[9].isNeedIndent && "indent-after",
                                  data[9].type === "h1" && "after:font-bold"
                                )}
                                style={{
                                  background: undefined,
                                  backgroundPositionX: "-110px",
                                }}
                              >
                                <div
                                  after-dynamic-value={data[8].content}
                                  className={cn(
                                    'cursor-pointer relative',
                                    'before:h-full before:w-full before:content-[""] before:absolute',
                                    'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                    data[8].isNeedIndent && "indent-after",
                                    data[8].type === "h1" && "after:font-bold"
                                  )}
                                  style={{
                                    background: undefined,
                                    backgroundPositionX: "-99px",
                                  }}
                                >
                                  <div
                                    after-dynamic-value={data[7].content}
                                    className={cn(
                                      'cursor-pointer relative',
                                      'before:h-full before:w-full before:content-[""] before:absolute',
                                      'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                      data[7].isNeedIndent && "indent-after",
                                      data[7].type === "h1" && "after:font-bold"
                                    )}
                                    style={{
                                      background: undefined,
                                      backgroundPositionX: "-88px",
                                    }}
                                  >
                                    <div
                                      after-dynamic-value={data[6].content}
                                      className={cn(
                                        'cursor-pointer relative',
                                        'before:h-full before:w-full before:content-[""] before:absolute',
                                        'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                        data[6].isNeedIndent && "indent-after",
                                        data[6].type === "h1" && "after:font-bold"
                                      )}
                                      style={{
                                        background: undefined,
                                        backgroundPositionX: "-77px",
                                      }}
                                    >
                                      <div
                                        after-dynamic-value={data[5].content}
                                        className={cn(
                                          'cursor-pointer relative',
                                          'before:h-full before:w-full before:content-[""] before:absolute',
                                          'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                          data[5].isNeedIndent && "indent-after",
                                          data[5].type === "h1" && "after:font-bold"
                                        )}
                                        style={{
                                          background: undefined,
                                          backgroundPositionX: "-66px",
                                        }}
                                      >
                                        <div
                                          after-dynamic-value={data[4].content}
                                          className={cn(
                                            'cursor-pointer relative',
                                            'before:h-full before:w-full before:content-[""] before:absolute',
                                            'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                            data[4].isNeedIndent && "indent-after",
                                            data[4].type === "h1" && "after:font-bold"
                                          )}
                                          style={{
                                            background: undefined,
                                            backgroundPositionX: "-55px",
                                          }}
                                        >
                                          <div
                                            after-dynamic-value={data[3].content}
                                            className={cn(
                                              'cursor-pointer relative',
                                              'before:h-full before:w-full before:content-[""] before:absolute',
                                              'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                              data[3].isNeedIndent && "indent-after",
                                              data[3].type === "h1" && "after:font-bold"
                                            )}
                                            style={{
                                              background: undefined,
                                              backgroundPositionX: "-44px",
                                            }}
                                          >
                                            <div
                                              after-dynamic-value={data[2].content}
                                              className={cn(
                                                'cursor-pointer relative',
                                                'before:h-full before:w-full before:content-[""] before:absolute',
                                                'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                                data[2].isNeedIndent && "indent-after",
                                                data[2].type === "h1" && "after:font-bold"
                                              )}
                                              style={{
                                                background: undefined,
                                                backgroundPositionX: "-33px",
                                              }}
                                            >
                                              <div
                                                after-dynamic-value={data[1].content}
                                                className={cn(
                                                  'cursor-pointer relative',
                                                  'before:h-full before:w-full before:content-[""] before:absolute',
                                                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                                  data[1].isNeedIndent && "indent-after",
                                                  data[1].type === "h1" && "after:font-bold"
                                                )}
                                                style={{
                                                  background: undefined,
                                                  backgroundPositionX: "-22px",
                                                }}
                                              >
                                                <div
                                                  after-dynamic-value={data[0].content}
                                                  className={cn(
                                                    'cursor-pointer relative',
                                                    'before:h-full before:w-full before:content-[""] before:absolute',
                                                    'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                                    data[0].isNeedIndent && "indent-after",
                                                    data[0].type === "h1" && "after:font-bold",
                                                  )}
                                                  style={{
                                                    background: undefined,
                                                    backgroundPositionX: "-11px",
                                                  }}
                                                >
                                                  <span className="absolute top-3 z-[2] [writing-mode:vertical-lr] [text-combine-upright:all] [backface-visibility:hidden] [transform:rotateY(-180deg)]">{index + 1}</span>
                                                  <div
                                                    className={cn(
                                                      'after:w-full after:block after:h-full after:content-[""] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] '
                                                    )}
                                                    style={{
                                                      background: undefined,
                                                      backgroundPositionX: "-0px",
                                                    }}
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        if (index === contentsData.length - 1 && content[1].content.length === 1) {
          const data = content[0].content;

          return (
            <div
              id="flip"
              className={cn(
                "flip-right relative ",
              )}
              tabIndex={0}
              key={id}
              ref={refCallbackFunction}
              onClick={() => onFlickPage(index)}
            >
              <div
                className={cn(
                  "w-[12px] h-[355px] absolute !right[-12px] [transform:rotateY(-180deg)] [backface-visibility:hidden]",
                )}
                style={{
                  background: undefined,
                  backgroundPositionX: "-0px",
                }}
              />
              <div
                id="front"
                ref={pageRef}
                before-dynamic-value={data[0].content}
                className={cn(
                  'cursor-pointer relative',
                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                  data[0].isNeedIndent && "indent-before",
                  data[0].type === "h1" && "before:font-bold"
                )}
                style={{
                  background: undefined,
                  backgroundPositionX: "-208px",
                }}
              >
                <span
                  className={cn(
                    "w-[12px] h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  )}
                  style={{
                    background: undefined,
                    backgroundPositionX: "-11px",
                  }}
                />
                <div
                  before-dynamic-value={data[1].content}
                  className={cn(
                    'cursor-pointer relative',
                    'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                    data[1].isNeedIndent && "indent-before",
                    data[1].type === "h1" && "before:font-bold"
                  )}
                  style={{
                    background: undefined,
                    backgroundPositionX: "-198px",
                  }}
                >
                  <span
                    className={cn(
                      "w-[12px] h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    )}
                    style={{
                      background: undefined,
                      backgroundPositionX: "-22px",
                    }}
                  />
                  <div
                    before-dynamic-value={data[2].content}
                    className={cn(
                      'cursor-pointer relative',
                      'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                      data[2].isNeedIndent && "indent-before",
                      data[2].type === "h1" && "before:font-bold"
                    )}
                    style={{
                      background: undefined,
                      backgroundPositionX: "-187px",
                    }}
                  >
                    <span
                      className={cn(
                        "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      )}
                      style={{
                        background: undefined,
                        backgroundPositionX: "-33px",
                      }}
                    />
                    <div
                      before-dynamic-value={data[3].content}
                      className={cn(
                        'cursor-pointer relative',
                        'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                        data[3].isNeedIndent && "indent-before",
                        data[3].type === "h1" && "before:font-bold"
                      )}
                      style={{
                        background: undefined,
                        backgroundPositionX: "-176px",
                      }}
                    >
                      <span
                        className={cn(
                          "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                        )}
                        style={{
                          background: undefined,
                          backgroundPositionX: "-44px",
                        }}
                      />
                      <div
                        before-dynamic-value={data[4].content}
                        className={cn(
                          'cursor-pointer relative',
                          'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                          data[4].isNeedIndent && "indent-before",
                          data[4].type === "h1" && "before:font-bold"
                        )}
                        style={{
                          background: undefined,
                          backgroundPositionX: "-165px",
                        }}
                      >
                        <span
                          className={cn(
                            "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                          )}
                          style={{
                            background: undefined,
                            backgroundPositionX: "-55px",
                          }}
                        />
                        <div
                          before-dynamic-value={data[5].content}
                          className={cn(
                            'cursor-pointer relative',
                            'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                            data[5].isNeedIndent && "indent-before",
                            data[5].type === "h1" && "before:font-bold"
                          )}
                          style={{
                            background: undefined,
                            backgroundPositionX: "-154px",
                          }}
                        >
                          <span
                            className={cn(
                              "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                            )}
                            style={{
                              background: undefined,
                              backgroundPositionX: "-66px",
                            }}
                          />
                          <div
                            before-dynamic-value={data[6].content}
                            className={cn(
                              'cursor-pointer relative',
                              'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                              data[6].isNeedIndent && "indent-before",
                              data[6].type === "h1" && "before:font-bold"
                            )}
                            style={{
                              background: undefined,
                              backgroundPositionX: "-143px",
                            }}
                          >
                            <span
                              className={cn(
                                "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                              )}
                              style={{
                                background: undefined,
                                backgroundPositionX: "-77px",
                              }}
                            />
                            <div
                              before-dynamic-value={data[7].content}
                              className={cn(
                                'cursor-pointer relative',
                                'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                data[7].isNeedIndent && "indent-before",
                                data[7].type === "h1" && "before:font-bold"
                              )}
                              style={{
                                background: undefined,
                                backgroundPositionX: "-132px",
                              }}
                            >
                              <span
                                className={cn(
                                  "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                )}
                                style={{
                                  background: undefined,
                                  backgroundPositionX: "-88px",
                                }}
                              />
                              <div
                                before-dynamic-value={data[8].content}
                                className={cn(
                                  'cursor-pointer relative',
                                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                  data[8].isNeedIndent && "indent-before",
                                  data[8].type === "h1" && "before:font-bold"
                                )}
                                style={{
                                  background: undefined,
                                  backgroundPositionX: "-121px",
                                }}
                              >
                                <span
                                  className={cn(
                                    "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                  )}
                                  style={{
                                    background: undefined,
                                    backgroundPositionX: "-99px",
                                  }}
                                />
                                <div
                                  before-dynamic-value={data[9].content}
                                  className={cn(
                                    'cursor-pointer relative',
                                    'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                    data[9].isNeedIndent && "indent-before",
                                    data[9].type === "h1" && "before:font-bold"
                                  )}
                                  style={{
                                    background: undefined,
                                    backgroundPositionX: "-110px",
                                  }}
                                >
                                  <span
                                    className={cn(
                                      "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                    )}
                                    style={{
                                      background: undefined,
                                      backgroundPositionX: "-110px",
                                    }}
                                  />
                                  <div
                                    before-dynamic-value={data[10].content}
                                    className={cn(
                                      'cursor-pointer relative',
                                      'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                      data[10].isNeedIndent && "indent-before",
                                      data[10].type === "h1" && "before:font-bold"
                                    )}
                                    style={{
                                      background: undefined,
                                      backgroundPositionX: "-99px",
                                    }}
                                  >
                                    <span
                                      className={cn(
                                        "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                      )}
                                      style={{
                                        background: undefined,
                                        backgroundPositionX: "-121px",
                                      }}
                                    />
                                    <div
                                      before-dynamic-value={data[11].content}
                                      className={cn(
                                        'cursor-pointer relative',
                                        'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                        data[11].isNeedIndent && "indent-before",
                                        data[11].type === "h1" && "before:font-bold"
                                      )}
                                      style={{
                                        background: undefined,
                                        backgroundPositionX: "-88px",
                                      }}
                                    >
                                      <span
                                        className={cn(
                                          "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                        )}
                                        style={{
                                          background: undefined,
                                          backgroundPositionX: "-132px",
                                        }}
                                      />
                                      <div
                                        before-dynamic-value={data[12].content}
                                        className={cn(
                                          'cursor-pointer relative',
                                          'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                          data[12].isNeedIndent && "indent-before",
                                          data[12].type === "h1" && "before:font-bold"
                                        )}
                                        style={{
                                          background: undefined,
                                          backgroundPositionX: "-77px",
                                        }}
                                      >
                                        <span
                                          className={cn(
                                            "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                          )}
                                          style={{
                                            background: undefined,
                                            backgroundPositionX: "-143px",
                                          }}
                                        />
                                        <div
                                          before-dynamic-value={data[13].content}
                                          className={cn(
                                            'cursor-pointer relative',
                                            'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                            data[13].isNeedIndent && "indent-before",
                                            data[13].type === "h1" && "before:font-bold"
                                          )}
                                          style={{
                                            background: undefined,
                                            backgroundPositionX: "-66px",
                                          }}
                                        >
                                          <span
                                            className={cn(
                                              "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                            )}
                                            style={{
                                              background: undefined,
                                              backgroundPositionX: "-154px",
                                            }}
                                          />
                                          <div
                                            before-dynamic-value={data[14].content}
                                            className={cn(
                                              'cursor-pointer relative',
                                              'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                              data[14].isNeedIndent && "indent-before",
                                              data[14].type === "h1" && "before:font-bold"
                                            )}
                                            style={{
                                              background: undefined,
                                              backgroundPositionX: "-55px",
                                            }}
                                          >
                                            <span
                                              className={cn(
                                                "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                              )}
                                              style={{
                                                background: undefined,
                                                backgroundPositionX: "-165px",
                                              }}
                                            />
                                            <div
                                              before-dynamic-value={data[15].content}
                                              className={cn(
                                                'cursor-pointer relative',
                                                'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                                data[15].isNeedIndent && "indent-before",
                                                data[15].type === "h1" && "before:font-bold"
                                              )}
                                              style={{
                                                background: undefined,
                                                backgroundPositionX: "-44px",
                                              }}
                                            >
                                              <span
                                                className={cn(
                                                  "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                                )}
                                                style={{
                                                  background: undefined,
                                                  backgroundPositionX: "-176px",
                                                }}
                                              />
                                              <div
                                                before-dynamic-value={data[16].content}
                                                className={cn(
                                                  'cursor-pointer relative',
                                                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                                  data[16].isNeedIndent && "indent-before",
                                                  data[16].type === "h1" && "before:font-bold"
                                                )}
                                                style={{
                                                  background: undefined,
                                                  backgroundPositionX: "-33px",
                                                }}
                                              >
                                                <span
                                                  className={cn(
                                                    "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                                  )}
                                                  style={{
                                                    background: undefined,
                                                    backgroundPositionX: "-187px",
                                                  }}
                                                />
                                                <div
                                                  before-dynamic-value={data[17].content}
                                                  className={cn(
                                                    'cursor-pointer relative',
                                                    'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                                    data[17].isNeedIndent && "indent-before",
                                                    data[17].type === "h1" && "before:font-bold"
                                                  )}
                                                  style={{
                                                    background: undefined,
                                                    backgroundPositionX: "-22px",
                                                  }}
                                                >
                                                  <span
                                                    className={cn(
                                                      "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                                    )}
                                                    style={{
                                                      background: undefined,
                                                      backgroundPositionX: "-198px",
                                                    }}
                                                  />
                                                  <span className="absolute top-3 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [writing-mode:vertical-lr]">
                                                    {contentsData.length > 2
                                                      ? contentsData.length + 1
                                                      : contentsData.length}
                                                  </span>
                                                  <div
                                                  
                                                  style={{
                                                    background: undefined,
                                                    backgroundPositionX: "-11px",
                                                  }}>
                                                    <span
                                                      className={cn(
                                                        "w-full h-full block absolute [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                                      )}
                                                      style={{
                                                        background: undefined,
                                                        backgroundPositionX: "-208px",
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        return (
          <div
            id="flip"
            className={"flip-right relative"}
            tabIndex={0}
            key={id}
            ref={refCallbackFunction}
            onClick={() => onFlickPage(index)}
          >
            <div
              id="front"
              ref={pageRef}
              before-dynamic-value={content[0].content[0].content}
              after-dynamic-value={content[1].content[17].content}
              className={cn(
                'cursor-pointer relative',
                'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                content[0].content[0].isNeedIndent && "indent-before",
                content[1].content[17].isNeedIndent && "indent-after",
                content[0].content[0].type === "h1" && "before:font-bold",
                content[1].content[17].type === "h1" && "after:font-bold",
              )}
              style={{
                background: undefined,
                backgroundPositionX: "-198px",
              }}
            >
              <div
                before-dynamic-value={content[0].content[1].content}
                after-dynamic-value={content[1].content[16].content}
                className={cn(
                  'cursor-pointer relative',
                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                  content[0].content[1].isNeedIndent && "indent-before",
                  content[1].content[16].isNeedIndent && "indent-after",
                  content[0].content[1].type === "h1" && "before:font-bold",
                  content[1].content[16].type === "h1" && "after:font-bold",
                )}
                style={{
                  background: undefined,
                  backgroundPositionX: "-187px",
                }}
              >
                <div
                  before-dynamic-value={content[0].content[2].content}
                  after-dynamic-value={content[1].content[15].content}
                  className={cn(
                    'cursor-pointer relative',
                    'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                    'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                    content[0].content[2].isNeedIndent && "indent-before",
                    content[1].content[15].isNeedIndent && "indent-after",
                    content[0].content[2].type === "h1" && "before:font-bold",
                    content[1].content[15].type === "h1" && "after:font-bold",
                  )}
                  style={{
                    background: undefined,
                    backgroundPositionX: "-176px",
                  }}
                >
                  <div
                    before-dynamic-value={content[0].content[3].content}
                    after-dynamic-value={content[1].content[14].content}
                    className={cn(
                      'cursor-pointer relative',
                      'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                      'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                      content[0].content[3].isNeedIndent && "indent-before",
                      content[1].content[14].isNeedIndent && "indent-after",
                      content[0].content[3].type === "h1" && "before:font-bold",
                      content[1].content[14].type === "h1" && "after:font-bold",
                    )}
                    style={{
                      background: undefined,
                      backgroundPositionX: "-165px",
                    }}
                  >
                    <div
                      before-dynamic-value={content[0].content[4].content}
                      after-dynamic-value={content[1].content[13].content}
                      className={cn(
                        'cursor-pointer relative',
                        'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                        'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                        content[0].content[4].isNeedIndent && "indent-before",
                        content[1].content[13].isNeedIndent && "indent-after",
                        content[0].content[4].type === "h1" && "before:font-bold",
                        content[1].content[13].type === "h1" && "after:font-bold",
                      )}
                      style={{
                        background: undefined,
                        backgroundPositionX: "-154px",
                      }}
                    >
                      <div
                        before-dynamic-value={content[0].content[5].content}
                        after-dynamic-value={content[1].content[12].content}
                        className={cn(
                          'cursor-pointer relative',
                          'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                          'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                          content[0].content[5].isNeedIndent && "indent-before",
                          content[1].content[12].isNeedIndent && "indent-after",
                          content[0].content[5].type === "h1" && "before:font-bold",
                          content[1].content[12].type === "h1" && "after:font-bold",
                        )}
                        style={{
                          background: undefined,
                          backgroundPositionX: "-143px",
                        }}
                      >
                        <div
                          before-dynamic-value={content[0].content[6].content}
                          after-dynamic-value={content[1].content[11].content}
                          className={cn(
                            'cursor-pointer relative',
                            'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                            'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                            content[0].content[6].isNeedIndent && "indent-before",
                            content[1].content[11].isNeedIndent && "indent-after",
                            content[0].content[6].type === "h1" && "before:font-bold",
                            content[1].content[11].type === "h1" && "after:font-bold",
                          )}
                          style={{
                            background: undefined,
                            backgroundPositionX: "-132px",
                          }}
                        >
                          <div
                            before-dynamic-value={content[0].content[7].content}
                            after-dynamic-value={content[1].content[10].content}
                            className={cn(
                              'cursor-pointer relative',
                              'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                              'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                              content[0].content[7].isNeedIndent && "indent-before",
                              content[1].content[10].isNeedIndent && "indent-after",
                              content[0].content[7].type === "h1" && "before:font-bold",
                              content[1].content[10].type === "h1" && "after:font-bold",
                            )}
                            style={{
                              background: undefined,
                              backgroundPositionX: "-121px",
                            }}
                          >
                            <div
                              before-dynamic-value={content[0].content[8].content}
                              after-dynamic-value={content[1].content[9].content}
                              className={cn(
                                'cursor-pointer relative',
                                'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                content[0].content[8].isNeedIndent && "indent-before",
                                content[1].content[9].isNeedIndent && "indent-after",
                                content[0].content[8].type === "h1" && "before:font-bold",
                                content[1].content[9].type === "h1" && "after:font-bold",
                              )}
                              style={{
                                background: undefined,
                                backgroundPositionX: "-110px",
                              }}
                            >
                              <div
                                before-dynamic-value={content[0].content[9].content}
                                after-dynamic-value={content[1].content[8].content}
                                className={cn(
                                  'cursor-pointer relative',
                                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                  content[0].content[9].isNeedIndent && "indent-before",
                                  content[1].content[8].isNeedIndent && "indent-after",
                                  content[0].content[9].type === "h1" && "before:font-bold",
                                  content[1].content[8].type === "h1" && "after:font-bold",
                                )}
                                style={{
                                  background: undefined,
                                  backgroundPositionX: "-99px",
                                }}
                              >
                                <div
                                  before-dynamic-value={content[0].content[10].content}
                                  after-dynamic-value={content[1].content[7].content}
                                  className={cn(
                                    'cursor-pointer relative',
                                    'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                    'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                    content[0].content[10].isNeedIndent && "indent-before",
                                    content[1].content[7].isNeedIndent && "indent-after",
                                    content[0].content[10].type === "h1" && "before:font-bold",
                                    content[1].content[7].type === "h1" && "after:font-bold",
                                  )}
                                  style={{
                                    background: undefined,
                                    backgroundPositionX: "-88px",
                                  }}
                                >
                                  <div
                                    before-dynamic-value={content[0].content[11].content}
                                    after-dynamic-value={content[1].content[6].content}
                                    className={cn(
                                      'cursor-pointer relative',
                                      'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                      'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                      content[0].content[11].isNeedIndent && "indent-before",
                                      content[1].content[6].isNeedIndent && "indent-after",
                                      content[0].content[11].type === "h1" && "before:font-bold",
                                      content[1].content[6].type === "h1" && "after:font-bold",
                                    )}
                                    style={{
                                      background: undefined,
                                      backgroundPositionX: "-77px",
                                    }}
                                  >
                                    <div
                                      before-dynamic-value={content[0].content[12].content}
                                      after-dynamic-value={content[1].content[5].content}
                                      className={cn(
                                        'cursor-pointer relative',
                                        'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                        'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                        content[0].content[12].isNeedIndent && "indent-before",
                                        content[1].content[5].isNeedIndent && "indent-after",
                                        content[0].content[12].type === "h1" && "before:font-bold",
                                        content[1].content[5].type === "h1" && "after:font-bold",
                                      )}
                                      style={{
                                        background: undefined,
                                        backgroundPositionX: "-66px",
                                      }}
                                    >
                                      <div
                                        before-dynamic-value={content[0].content[13].content}
                                        after-dynamic-value={content[1].content[4].content}
                                        className={cn(
                                          'cursor-pointer relative',
                                          'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                          'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                          content[0].content[13].isNeedIndent && "indent-before",
                                          content[1].content[4].isNeedIndent && "indent-after",
                                          content[0].content[13].type === "h1" && "before:font-bold",
                                          content[1].content[4].type === "h1" && "after:font-bold",
                                        )}
                                        style={{
                                          background: undefined,
                                          backgroundPositionX: "-55px",
                                        }}
                                      >
                                        <div
                                          before-dynamic-value={content[0].content[14].content}
                                          after-dynamic-value={content[1].content[3].content}
                                          className={cn(
                                            'cursor-pointer relative',
                                            'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                            'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                            content[0].content[14].isNeedIndent && "indent-before",
                                            content[1].content[3].isNeedIndent && "indent-after",
                                            content[0].content[14].type === "h1" && "before:font-bold",
                                            content[1].content[3].type === "h1" && "after:font-bold",
                                          )}
                                          style={{
                                            background: undefined,
                                            backgroundPositionX: "-44px",
                                          }}
                                        >
                                          <div
                                            before-dynamic-value={content[0].content[15].content}
                                            after-dynamic-value={content[1].content[2].content}
                                            className={cn(
                                              'cursor-pointer relative',
                                              'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                              'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                              content[0].content[15].isNeedIndent && "indent-before",
                                              content[1].content[2].isNeedIndent && "indent-after",
                                              content[0].content[15].type === "h1" && "before:font-bold",
                                              content[1].content[2].type === "h1" && "after:font-bold",
                                            )}
                                            style={{
                                              background: undefined,
                                              backgroundPositionX: "-33px",
                                            }}
                                          >
                                            <div
                                              before-dynamic-value={content[0].content[16].content}
                                              after-dynamic-value={content[1].content[1].content}
                                              className={cn(
                                                'cursor-pointer relative',
                                                'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                                'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                                content[0].content[16].isNeedIndent && "indent-before",
                                                content[1].content[1].isNeedIndent && "indent-after",
                                                content[0].content[16].type === "h1" && "before:font-bold",
                                                content[1].content[1].type === "h1" && "after:font-bold",
                                              )}
                                              style={{
                                                background: undefined,
                                                backgroundPositionX: "-22px",
                                              }}
                                            >
                                              <div
                                                before-dynamic-value={content[0].content[17].content}
                                                after-dynamic-value={content[1].content[0].content}
                                                className={cn(
                                                  'cursor-pointer relative',
                                                  'before:h-full before:content-[attr(before-dynamic-value)] before:absolute before:text-gray-800',
                                                  'after:w-full after:h-full after:content-[attr(after-dynamic-value)] after:absolute after:text-gray-800 after:[transform:rotateY(-180deg)] ',
                                                  content[0].content[17].isNeedIndent && "indent-before",
                                                  content[1].content[0].isNeedIndent && "indent-after",
                                                  content[0].content[17].type === "h1" && "before:font-bold",
                                                  content[1].content[0].type === "h1" && "after:font-bold",
                                                )}
                                                style={{
                                                  background: undefined,
                                                  backgroundPositionX: "-11px",
                                                }}
                                              >
                                                <span className="absolute top-3 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [writing-mode:vertical-lr]">
                                                  {index + 1 === 2 ? index + 1 : index + 2}
                                                </span>
                                                <span className="absolute top-3 z-[2] [backface-visibility:hidden] [text-combine-upright:all] [transform:rotateY(-180deg)] [writing-mode:vertical-lr]">
                                                  {index + 2}
                                                </span>
                                                <div
                                                style={{
                                                  background: undefined,
                                                  backgroundPositionX: "-0px",
                                                }}></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}