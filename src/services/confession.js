const section_header = 'SECTION_HEADER';
const page = 'PAGE';
const title = 'TITLE';
const subtitle = 'SUBTITLE';
const subtitle_2 = 'SUBTITLE_2';
const paragraph = 'PARAGRAPH';
const verse = 'PARAGRAPH'; //for now, we will treat every verse as a paragraph
// const verse = 'VERSE'; //delete the line above and uncomment this line for when markdown verses are used

export default {
  getPage(part, page) {
    return this.parts[`part_${part}`].pages[page.replace(/-/g, '_')];
  },
  table_of_contents: [
    {
      type: page,
      part: 0,
      content: `How To Use These Confessions Effectively`
    },
    { type: section_header, content: `Part 1` },
    { type: page, part: 1, content: `Apostle Paul’s Prayer` },
    { type: page, part: 1, content: `I Am A New Creation` },
    { type: page, part: 1, content: `I Know Who I Am In Christ` },
    { type: page, part: 1, content: `I Know What I Have As A Christian` },
    { type: page, part: 1, content: `I Change Situations And Always Win` },
    { type: page, part: 1, content: `I Am The Prophet Of My Life` },
    { type: page, part: 1, content: `Christ In Me` },
    {
      type: page,
      part: 1,
      content: `Confession For Functioning In The Spirit`
    },
    { type: section_header, content: `Part 2 - Prayer By Theme` },
    { type: page, part: 2, content: `Confession For Healing` },
    { type: page, part: 2, content: `Confession For Financial Prosperity` },
    { type: page, part: 2, content: `Confession For A Victorious Family` },
    { type: page, part: 2, content: `Confession For Soul-Winning` },
    { type: page, part: 2, content: `Confession For Peace` },
    { type: page, part: 2, content: `Confession For Wisdom And Guidance` },
    {
      type: page,
      part: 2,
      content: `Confession For Victory In Face Of Trials`
    },
    { type: page, part: 2, content: `Confession For Overcoming Fear` },
    { type: page, part: 2, content: `Prayer For Beginning The Day` },
    { type: section_header, content: `Part 3 - Appendix` },
    { type: page, part: 3, content: `Confessions From Foundations Of Faith` },
    { type: page, part: 3, content: `Confessions From Psalms` },
    { type: page, part: 3, content: `Romans 8` },
    { type: page, part: 3, content: `Isaiah 60` }
  ],
  parts: {
    part_0: {
      pages: {
        how_to_use_these_confessions_effectively: [
          {
            type: title,
            content: `How to Use These Confessions Effectively`
          },
          {
            type: paragraph,
            content: `Hallelujah! Praise Jesus Christ, who achieved everything and gave us His authority and power so that we could reign in every situation and live a victorious life.`
          },
          {
            type: paragraph,
            content: `Living a life of faith, partnering with the Holy Spirit as a child of the Father, and serving Jesus Christ as Lord is truly an amazing life.`
          },
          {
            type: paragraph,
            content: `The moment we accept the gospel and are born again with this new life, our spirit has become a new man. However, because our mind, emotion, and will, which belong to the soul, have not been renewed, we must renew them through God’s Word and continually train our born again spirit by functioning in faith according to the Word. Only then can we gradually develop spiritually and fully reign in this new life as a king.`
          },
          {
            type: paragraph,
            content: `Praying in tongues, meditating on the word(confession), the attitude of putting God’s Word as your highest priority, and training to immediately obey the voice of our born again spirit is the shortcut that allow us to develop our born again spirit and reign in every situation.`
          },
          {
            type: paragraph,
            content: `As I have been in ministry for decades, I see that even though people might know much scripture, if they do not confess with their mouth the Word they believe, they experience very slow positive changes and weak manifestations. On the other hand, I have also seen that no matter how bad the mental problem, if a person receives God’s Word as truth and repeatedly confesses it, he or she can be completely restored from a hopeless situation, built up to be an ambassador for God’s kingdom.`
          },
          {
            type: paragraph,
            content: `Confessing the Word is not just a method you see on the outside. This is the spiritual principle of how Jesus manifested in the natural realm what he already achieved in the spiritual realm, and is a power and privilege that only New Creation born-again Christians can have.`
          },
          {
            type: paragraph,
            content: `Now I have a few necessary words to share with you about how to utilize “The New Creation Confession Book” more effectively.`
          },
          {
            type: paragraph,
            content: `*Confess with a strong and bold heart. If you are saying that ‘There is nothing I can do about this situation or circumstance. I have no hope but God’s compassion,’ this kind of attitude is from the Old Testament, and is not the attitude that allows you to reign as a king as a joint-heir with Christ. Remember that before God told Joshua “Let not the Word to depart from your mouth that you may keep and do all that is written therein,” God first told him to “Be strong and courageous.” Have strength from the heart just as David had when he went out to fight Goliath.`
          },
          {
            type: paragraph,
            content: `*Be conscious of what the bible says about who you are in Christ, what you have in Christ, and what you can do in Christ as you confess as a born-again New Creation.`
          },
          {
            type: paragraph,
            content: `*When you confess, it is good to not just say it with your mouth, but to put your heart and emotion in to it, confessing as loud as you can.`
          },
          {
            type: paragraph,
            content: `*If there is a scripture that touches your heart or if you think it to be important to you at this moment, confess those scriptures repeatedly several times with gusto, praying in tongues intermittently, having the anointing overflow from your spirit.`
          },
          {
            type: paragraph,
            content: `*If you want to build a bold attitude before you confess, confess “I Change Situations and Always Win,” “I Am the Prophet of My Life,” and “Christ In Me” first.`
          },
          {
            type: paragraph,
            content: `*Always confess “The New Creation Confession” first, and then confess from “Confession by Themes,” picking a prayer theme that applies to the problem you are facing now.`
          },
          {
            type: paragraph,
            content: `*It is always good to praise and worship God, to thank Him, and to pray in tongues in between your confession. Every confession seeks the manifestations of the Holy Spirit who works according to the Word of God.`
          },
          {
            type: paragraph,
            content: `When we confess the Word with faith, we first receive revelation in our hearts, coming to understand and believe the Word. When this happens, you will find that even if we do not work hard and try, the Word we confessed becomes the power within us, producing whatever it has talked about. Then the situation will change, or the wisdom to change the situation will follow. This is because the more we look at the Word, the more the glory of the Word is at work in us.`
          },
          {
            type: paragraph,
            content: `But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the LORD`
          },
          { type: paragraph, content: `2 Corinthians 3:18` },
          {
            type: paragraph,
            content: `God has already prepared all good things in the spiritual realm and He has given us the authority and responsibility to execute them here on this earth.`
          },
          {
            type: paragraph,
            content: `We must each reign in all situations regarding each of our lives, gradually increasing in influence, winning souls, and expanding God’s kingdom as soldiers for God’s kingdom. Hallelujah!`
          },
          {
            type: paragraph,
            content: `Looking forward to the march of a great army fulfilling God’s will here on this earth…`
          },
          { type: paragraph, content: `June 1st, 2011` },
          { type: paragraph, content: `Soonae Choi` }
        ]
      }
    },
    part_1: {
      title: `Confession of New Creation`,
      pages: {
        apostle_pauls_prayer: [
          { type: title, content: `Apostle Paul's Prayer` },
          { type: subtitle, content: 'The Prayer for Revelation' },
          {
            type: paragraph,
            content:
              'I pray that the God of our Lord Jesus Christ, the Father of glory, may give unto me the spirit of wisdom and revelation in the knowledge of him: The eyes of my understanding being enlightened; that I may know what is the hope of his calling, and what are the riches of the glory of his inheritance in the saints, and what is the exceeding greatness of his power towards me who believes, according to the working of his mighty power (Ephesians 1:17-19).'
          },
          { type: subtitle, content: 'The Prayer for Power' },
          {
            type: paragraph,
            content:
              'I pray that out of his glorious riches he may strengthen me with power through his Spirit in my inner being, so that Christ may dwell in my heart through faith. And I pray that I, being rooted and established in love, may have power, together with all the saints, to grasp how wide and how long and how high and how deep is the love of Christ, and to know this love that surpasses knowledge that I may be filled to the measure of all the fullness of God (Ephesians 3:16-19).'
          },
          { type: subtitle, content: 'The Prayer for Fruit' },
          {
            type: paragraph,
            content:
              'I pray that God would fill me with the knowledge of his will through all spiritual wisdom and understanding. And I pray this in order that I may live a life worthy of the Lord and may please him in every way: bearing fruit in every good work, growing in the knowledge of God, being strengthened with all power according to his glorious might so that I may have great endurance and patience, and joyfully giving thanks to the Father, who has qualified me to share in the inheritance of the saints in the kingdom of light (Colossians 1:9-12).'
          },
          { type: subtitle, content: 'The Prayer of Soul Winners' },
          {
            type: paragraph,
            content:
              'I pray that my love may abound yet more and more in knowledge and in all judgment; That I may approve things that are excellent; that I may be sincere and without offence till the day of Christ; being filled with the fruits of righteousness, which are by Jesus Christ, unto the glory and praise of God (Philippians 1:9-11).'
          }
        ],
        i_am_a_new_creation: [
          { type: title, content: 'I am a New Creation!' },
          {
            type: verse,
            content: `“Therefore if any man be in Christ, he is a new creature: old things are passed away; behold all things are become new.” (2 Corinthians 5:17)`
          },
          {
            type: verse,
            content: `“Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth forever.” (1 Peter 1:23)`
          },
          {
            type: verse,
            content: `“Of his own will begat he us with the word of truth, that we should be a kind of firstfruits of his creatures.” (James 1:18)`
          },
          {
            type: verse,
            content: `“I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.” (Galatians 2:20)`
          },
          {
            type: verse,
            content: `“For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.” (Galatians 3:26-27)`
          },
          {
            type: verse,
            content: `“Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son.” (Colossians 1:13)`
          },
          {
            type: verse,
            content: `“For if by one man's offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ.” (Romans 5:17)`
          },
          {
            type: verse,
            content: `“For which cause we faint not; but though our outward man perish, yet the inward man is renewed day by day.” (2 Corinthians 4:16)`
          },
          {
            type: paragraph,
            content: `I was born again from heaven by receiving Jesus into my heart. He has delivered me from the power of darkness, and has translated me into the kingdom of his dear Son. I was crucified with Christ but now I am quickened together with Christ and I sit together in heavenly places in Christ Jesus. His authority is my authority.
          It is no longer I who live, but Christ lives in me. I have put on Christ. I have become a new creation;
          not partly changed but completely renewed in the realm of the spirit. I function in the realm of the Spirit and in the realm of the Word as a new creation.
          I have the nature of Christ. I have the love of Christ. I have the power of Christ. I can change things through my new nature when I think, speak and act according to the Word.
          Now I am never frustrated by things or circumstances in the world, but I walk according to the Word of God to reign in life by Jesus Christ. I am never frustrated. Though my outward man perishes, yet the inward man is renewed day by day. I change from glory to glory and power above power.
          I am a new creation born again with his divine life and nature.`
          }
        ],
        i_know_who_i_am_in_christ: [
          {
            type: title,
            content: `I Know Who I am in Christ`
          },
          {
            type: verse,
            content: `“They are not of the world, even as I am not of the world. Sanctify them through thy truth: thy word is truth. As thou hast sent me into the world, even so have I also sent them into the world.” (John 17: 16-18)`
          },
          {
            type: verse,
            content: `“But ye are come unto mount Zion, and unto the city of the living God, the heavenly Jerusalem, and to an innumerable company of angels, To the general assembly and church of the firstborn, which are written in heaven, and to God the Judge of all, and to the spirits of just men made perfect, And to Jesus the mediator of the new covenant, and to the blood of sprinkling, that speaketh better things than that of Abel.” (Hebrews 12:22-24)`
          },
          {
            type: verse,
            content: `“Nay, in all these things we are more than conquerors through him that loved us.” (Romans 8:37)`
          },
          {
            type: verse,
            content: `“But ye are a chosen generation, a royal priesthood, a holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvelous light;.” (1 Peter 2:9)`
          },
          {
            type: paragraph,
            content: `I know who I am in Christ. 
          I am a child of God. 
          I live in the world but I am not of the world.
          I am a citizen of Zion. 
          Therefore, I live according to the spiritual principles of Zion (John 17:16, Hebrews 12:22).
          I am from above.
          I live a supernatural life by faith.
          Nothing can make me a victim.
          I am more than a conqueror who has overcome the world and I reign in this world supernaturally. (Romans 8:37)`
          },
          {
            type: paragraph,
            content: `Thank you, Jesus. I know who I am. 
          I am a new creation in Christ. (2 Corinthians 5:17) 
          I live by life of God, the same life given to Jesus. (1 John 4:17)
          You have given me all things that pertain unto life and godliness, through your divine power of Christ on cross. (2 Peter 1:3)
          As every place that the sole of my foot treads upon has been given unto me, the promises in your Word are already granted. (Joshua 1:3)`
          },
          {
            type: subtitle,
            content: `1. I am a Christian who has eternal life.`
          },
          {
            type: verse,
            content: `“For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.” (John 3:16)`
          },
          {
            type: verse,
            content: `“In him was life; and the life was the light of men.” (John 1:4)`
          },
          {
            type: verse,
            content: `“But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.” (John 20:31)`
          },
          {
            type: verse,
            content: `“And this is the record, that God hath given to us eternal life, and this life is in his Son.” (1 John 5:11)`
          },
          {
            type: paragraph,
            content: `I have eternal life. 
          This eternal life is God-kind of life (ZOE), and it has been given to me when I received Jesus. 
          My spirit is full of ZOE. My soul is full of ZOE. My body is full of ZOE. 
          ZOE is a life-giving spirit. Therefore, no sickness can stay in my body. 
          Any infirmity or disease cannot stay in my body. 
          When I am confronted with things I do not desire, I declare them to change by faith. 
          When I declare in ZOE, things are subject to change.`
          },
          {
            type: subtitle,
            content: `2. I am a Christian who has conquered the devil.`
          },
          {
            type: verse,
            content: `“Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that by death he might destroy him that had the power of death, that is, the devil; And deliver them who through fear of death were all their lifetime subject to bondage”. (Hebrews 2:14-15)`
          },
          {
            type: verse,
            content: `“Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross; And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.” (Colossians 2:14-15)`
          },
          {
            type: verse,
            content: `“Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world.” (1 John 4:4)`
          },
          {
            type: verse,
            content: `“And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.” (Revelation 12:11)`
          },
          {
            type: paragraph,
            content: `I have defeated the devil as I am in Christ. 
          I don’t fear the devil. He cannot do anything to me. Therefore, I always win. 
          This is because greater is He that is in me than he that is in the world.`
          },
          {
            type: subtitle,
            content: `3. I am a Christian who has faith`
          },
          {
            type: verse,
            content: `“For I say, through the grace given unto me, to every man that is among you, not to think of himself more highly than he ought to think; but to think soberly, according as God hath dealt to every man the measure of faith.” (Romans 12:3)`
          },
          {
            type: verse,
            content: `“For we walk by faith, not by sight:” (2 Corinthians 5:7)`
          },
          {
            type: paragraph,
            content: `I have faith. It has been given to me when I was born again and it has the power to move mountains. I don’t walk by sight but by faith. I think, speak and act in the realm of faith, therefore I always win. I increase my faith by hearing the Word, and I strengthen my faith by acting on my faith. I reign in the world by faith.`
          },
          {
            type: subtitle,
            content: `4. I am a Christian who became righteous by the righteousness of God`
          },
          {
            type: verse,
            content: `“But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption.” (1 Corinthians 1:30)`
          },
          {
            type: verse,
            content: `“Being justified freely by his grace through the redemption that is in Christ Jesus:” (Romans 3:24)`
          },
          {
            type: verse,
            content: `“Who was delivered for our offences, and was raised again for our justification. Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.” (Romans 4:25-5:1)`
          },
          {
            type: verse,
            content: `“For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.” (2 Corinthians 5:21)`
          },
          {
            type: paragraph,
            content: `I am righteous. 
          As Christ became my righteousness, I became righteous. I was born again righteous by faith. Righteousness is my nature.
          No matter what I have done, I can always stand before the presence of God without any condemnation or inferiority.
          My spirit always has the power to do the will of God. I am always bold.
          As a righteous man, my prayer always works.
          Therefore, I always get my prayers answered.`
          },
          {
            type: subtitle,
            content: `5. I am a Christian who has the grace which enables me to do anything with excellence`
          },
          {
            type: verse,
            content: `“But unto every one of us is given grace according to the measure of the gift of Christ.” (Ephesians 4:7)`
          },
          {
            type: verse,
            content: `“I can do all things through Christ which strengtheneth me.” (Philippians 4:13)`
          },
          {
            type: verse,
            content: `“And we know that all things work together for good to them that love God, to them who are called according to his purpose.” (Romans 8:28)`
          },
          {
            type: verse,
            content: `“But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.” (1 John 2:27)`
          },
          {
            type: verse,
            content: `“He was well known for his intellectual brilliance and spiritual wisdom... He could do anything—interpret dreams, solve mysteries, explain puzzles.” (Daniel 5:12 MSG)`
          },
          {
            type: paragraph,
            content: `I have grace flowing out from my Spirit, so my life is full of your beauty, favor, charm and dignity. 
          Because of the grace, I am favored by my colleagues, friends and my superiors as well as my subordinates. This grace is the power of God to overcome any situation against me. The power of God is working in my spirit.
          I can do anything through Christ who strengthens me. God is my power. I am not using human abilities. I have supernatural power. I can do anything.
          The anointing is in my soul. The anointing is in my spirit.
          I am excellent. Joseph received a spirit of excellence. 
          Daniel also received a spirit of excellence. I have also received a spirit of excellence. Nothing is impossible. 
          I have the power of God working inside me.
          No weapon formed against me shall prosper, because greater is he that is in me, than he that is in the world.
          God is my ability.`
          },
          {
            type: subtitle,
            content: `6. I am a Christian who is legally and legitimately a son of God with his life`
          },
          {
            type: verse,
            content: `“Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not. Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.” (1 John 3:1-2)`
          },
          {
            type: verse,
            content: `“And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.” (Galatian 4:6)`
          },
          {
            type: verse,
            content: `“Jesus saith unto her, Touch me not; for I am not yet ascended to my Father: but go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God.” (John 20:17)`
          },
          {
            type: paragraph,
            content: `I call God Abba Father, because I am his child. God sent his only begotten son to the world so that we can dwell in him.
          I reign in the world as Jesus reigned in the world.
          I refuse to be sick.
          I refuse to fail.
          I am more than a conqueror through him that loved me. 
          I am blessed. 
          I bring blessings wherever I go.
          Jesus brought the eternal life, so I live in the same class as him.
          I am an ark of blessing. I live like a king in the world. 
          As a king has authority in his words, I speak like a king and my words come true.
          I’m not an ordinary person.`
          },
          {
            type: subtitle,
            content: `7. Christians are the righteousness of God.`
          },
          {
            type: verse,
            content: `“For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.” (2 Corinthians 5:21)`
          },
          {
            type: verse,
            content: `“And the work of righteousness shall be peace; and the effect of righteousness, quietness and assurance forever.” (Isaiah 32:17)`
          },
          {
            type: verse,
            content: `“But you are a chosen race, a royal priesthood, a dedicated nation, [God’s] own purchased, special people, that you may set forth the wonderful deeds and display the virtues and perfections of Him Who called you out of darkness into His marvelous light.” (1 Peter 2:9)`
          },
          {
            type: paragraph,
            content: `I am the righteousness of God.
          I am the trophy of his goodness.
          I am his ambassador. 
          I am his messenger. 
          People come to know God through me.
          People see his reality through me.
          Every part of my life represents the glory of God.`
          }
        ],
        i_know_what_i_have_as_a_christian: [
          {
            type: title,
            content: `I Know What I Have as a Christian`
          },
          {
            type: subtitle,
            content: `1. I have the God-kind of life`
          },
          {
            type: verse,
            content: `The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly. (John 10:10)`
          },
          {
            type: verse,
            content: `That whosoever believeth in him should not perish, but have eternal life. For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. (John 3:15-16)`
          },
          {
            type: verse,
            content: `He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him. (John 3:36)`
          },
          {
            type: verse,
            content: `I have eternal life. Eternal life is the life of God, and this life was given to me when I received Jesus into my heart.`
          },
          {
            type: paragraph,
            content: `My spirit is filled with this ZOE life. My soul is filled with this ZOE life. My body is filled with this ZOE life. This ZOE life is a life-giving spirit. Therefore, no sickness can dwell in my body. All weaknesses and diseases cannot stay in my body.`
          },
          {
            type: paragraph,
            content: `If I meet a situation I do not like, I change my circumstances through proclaiming by faith. When I proclaim in this ZOE life by faith, the circumstances cannot help but change.`
          },
          {
            type: subtitle,
            content: `2. I have righteousness.`
          },
          {
            type: verse,
            content: `Being justified freely by his grace through the redemption that is in Christ Jesus: (Romans 3:24)`
          },
          {
            type: verse,
            content: `Who was delivered for our offences, and was raised again for our justification. (Romans 4:25)`
          },
          {
            type: verse,
            content: `For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him. (2 Corinthians 5:21)`
          },
          {
            type: verse,
            content: `But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption: (1 Corinthians 1:30)`
          },
          {
            type: verse,
            content: `And be found in him, not having mine own righteousness, which is of the law, but that which is through the faith of Christ, the righteousness which is of God by faith: (Philippians 3:9)`
          },
          {
            type: paragraph,
            content: `I am righteous. Christ has become my righteousness, and therefore, I am righteous. 
          Righteousness is my nature. I can always stand in the presence of God guiltless, and free of self-consciousness, regardless of my actions. 
          I have in my spirit the ability to always act according to God’s will. 
          I am always righteous. Therefore, my prayers are always answered.`
          },
          {
            type: subtitle,
            content: `3. I have the remission of sins.`
          },
          {
            type: verse,
            content: `For this is my blood of the new testament, which is shed for many for the remission of sins. (Matthew 26:28)`
          },
          {
            type: verse,
            content: `For if our heart condemn us, God is greater than our heart, and knoweth all things. (1 John 3:20)`
          },
          {
            type: verse,
            content: `How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God? (Hebrews 9:14)`
          },
          {
            type: verse,
            content: `To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins. (Acts 10:43)`
          },
          {
            type: paragraph,
            content: `My sins have been remitted. I am a righteous man and I am no longer a sinner. If I sin, I confess my sins and quickly step out of condemnation. 
          My sins have been completely remitted.`
          },
          {
            type: subtitle,
            content: `4. I have salvation, deliverance, and freedom.`
          },
          {
            type: verse,
            content: `Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son: (Col 1:13)`
          },
          {
            type: verse,
            content: `The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, To preach the acceptable year of the Lord. (Luke 4:18-19)`
          },
          {
            type: verse,
            content: `To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me.  (Acts 26:18)`
          },
          {
            type: paragraph,
            content: `I know who I am. I am a child of God. I am a joint-heir with Christ. 
          Everything in this world must obey to the name of Jesus.
          I have won over Satan. Christ has brought me out from the kingdom of darkness and has freed me into the kingdom of his dear Son.  
          Now the devil has nothing to do with me. Satan cannot manifest in any area of my life. 
          I declare Satan’s manifestations to be illegal in any area of my life. 
          “Satan, I command you in the name of Jesus, leave me!”`
          },
          {
            type: subtitle,
            content: `5. I have healing and divine health.`
          },
          {
            type: verse,
            content: `But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. (Isaiah 53:5)`
          },
          {
            type: verse,
            content: `Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed. (1 Peter 2:24)`
          },
          {
            type: paragraph,
            content: `By Christ’s stripes I am healed. Therefore, I refuse every weakness and sickness in Jesus name. No sickness and stay in my body. 
          Divine health is our birthright. I am always full of God’s power and God’s life. 
          I am going to live a long, long healthy life, glorifying God with the divine health God has given me.`
          },
          {
            type: subtitle,
            content: `6. I have peace and oneness with God.`
          },
          {
            type: verse,
            content: `For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us; Having abolished in his flesh the enmity, even the law of commandments contained in ordinances; for to make in himself of twain one new man, so making peace; (Ephesians 2:14-15)`
          },
          {
            type: verse,
            content: `Therefore being justified by faith, we have peace with God through our Lord Jesus Christ: By whom also we have access by faith into this grace wherein we stand, and rejoice in hope of the glory of God. (Romans 5:1-2)`
          },
          {
            type: verse,
            content: `These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.(John 16:33)`
          },
          {
            type: paragraph,
            content: `Through our Lord Christ Jesus, I have peace with God. 
          I have become one with God through Christ. Jesus is the head and we are his body. We are members of his flesh and of his bones. (Ephesians 5:30)
          As Jesus was on this earth, so am I.`
          },
          {
            type: subtitle,
            content: `7. I have prosperity.`
          },
          {
            type: verse,
            content: `For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich. (2 Corinthians 8:9)`
          },
          {
            type: verse,
            content: `And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work: (2 Corinthians 9:8)`
          },
          {
            type: verse,
            content: `Now he that ministereth seed to the sower both minister bread for your food, and multiply your seed sown, and increase the fruits of your righteousness;) (2 Corinthians 9:10)`
          },
          {
            type: verse,
            content: `And the Lord was with Joseph, and he was a prosperous man; and he was in the house of his master the Egyptian. (Genesis 39:2)`
          },
          {
            type: verse,
            content: `And they rose early in the morning, and went forth into the wilderness of Tekoa: and as they went forth, Jehoshaphat stood and said, Hear me, O Judah, and ye inhabitants of Jerusalem; Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper. (2 Chronicles 20:20)`
          },
          {
            type: verse,
            content: `Let them shout for joy, and be glad, that favour my righteous cause: yea, let them say continually, Let the Lord be magnified, which hath pleasure in the prosperity of his servant. (Psalm 35:27)`
          },
          {
            type: verse,
            content: `The blessing of the Lord, it maketh rich, and he addeth no sorrow with it. (Proverbs 10:22)`
          },
          {
            type: verse,
            content: `Cry yet, saying, Thus saith the Lord of hosts; My cities through prosperity shall yet be spread abroad; and the Lord shall yet comfort Zion, and shall yet choose Jerusalem. (Zechariah 1:17)`
          },
          {
            type: paragraph,
            content: `Jesus Christ who was prosperous became poor so that I may become prosperous. Therefore, being born again, I am prosperous.`
          },
          {
            type: paragraph,
            content: `Prosperity is an authority that belongs to a child of God. 
          Prosperity is God’s gift. 
          God gives me the ability, wisdom, and opportunity to obtain wealth. 
          I have an excellent spirit that best utilizes the wisdom, ability, opportunity, and divine connection God gives me. 
          As God’s soldier, I use the prosperity God has given me to win souls and to expand God’s kingdom. 
          I am prosperous.`
          },
          {
            type: subtitle,
            content: `8. As a citizen of Zion, I have the authority to use the name of Jesus.`
          },
          {
            type: verse,
            content: `And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen. (Matthew 28:18-20)`
          },
          {
            type: verse,
            content: `And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together. (Romans 8:17)`
          },
          {
            type: verse,
            content: `For we are God’s [own] handiwork (His workmanship), recreated in Christ Jesus, [born anew] that we may do those good works which God predestined (planned beforehand) for us [taking paths which He prepared ahead of time], that we should walk in them [living the good life which He prearranged and made ready for us to live.  (Ephesians 2:10 AMP)`
          },
          {
            type: verse,
            content: `Ye have not chosen me, but I have chosen you, and ordained you, that ye should go and bring forth fruit, and that your fruit should remain: that whatsoever ye shall ask of the Father in my name, he may give it you (John 15:16)`
          },
          {
            type: paragraph,
            content: `Jesus took back the authority to rule this earth and made me a joint-heir with him to give me that authority. 
          Whatever I see according to the Word, whatever I believe, and whatever I confess in Jesus name, everything obeys the authority of that name. I am a conqueror reigning with Christ in my life.`
          },
          {
            type: subtitle,
            content: `9. I have God’s agape love poured inside me and I can act in that love.`
          },
          {
            type: verse,
            content: `And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him. Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world. There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love. We love him, because he first loved us. (1 John 4:16-19)`
          },
          {
            type: verse,
            content: `And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us. (Romans 5:5)`
          },
          {
            type: verse,
            content: `But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you; (Matthew 5:44)`
          },
          {
            type: verse,
            content: `Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things. (1 Corinthians 13:4-7)`
          },
          {
            type: paragraph,
            content: `I always act in love with the Holy Spirit inside me who is the spirit of love. 
          I love my enemies and bless those who curse me. I am kind to those who hate me and by praying for those who mistreat and persecute me, I act according to my heavenly Father’s perfection.`
          },
          {
            type: paragraph,
            content: `I do not overcome darkness with darkness. Instead, I drive out darkness with light, because I am a child of my Father who is the light. I have that kind of love poured inside me. Therefore, I choose to love with the love of God. 
          I am patient. 
          I am meek.
          I am not jealous.
          I do not brag and I am not proud.
          I am not rude.
          I do not seek my own profit. 
          I do not anger. 
          I do not think evil. 
          I do not rejoice in evil. I rejoice with the truth. 
          Because I am a lover, I cover all things with love, I believe all things, I desire all things, and I endure all things.`
          },
          {
            type: subtitle,
            content: `10. I have wisdom.`
          },
          {
            type: verse,
            content: `But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption: (1 Corinthians 1:30)`
          },
          {
            type: verse,
            content: `In whom are hid all the treasures of wisdom and knowledge. For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him, which is the head of all principality and power: (Colossians 2:3, 9-10)`
          },
          {
            type: verse,
            content: `And the spirit of the LORD shall rest upon him, the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and of the fear of the LORD (Isaiah 11:2)`
          },
          {
            type: verse,
            content: `Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding. Exalt her, and she shall promote thee: she shall bring thee to honour, when thou dost embrace her. (Proverbs 4:7-8)`
          },
          {
            type: verse,
            content: `Hear instruction, and be wise, and refuse it not. Blessed is the man that heareth me, watching daily at my gates, waiting at the posts of my doors. For whoso findeth me findeth life, and shall obtain favour of the Lord. (Proverbs 8:33-35)`
          },
          {
            type: paragraph,
            content: `Jesus became my wisdom and therefore I have greater wisdom than Solomon inside me. Therefore, I always think the right thoughts, say the right things, and make the right choices and actions by the help of the Holy Spirit. 
          I am not misled. I don’t walk in darkness. I always see with the right perspective and make wise choices and wise actions.`
          }
        ],
        i_change_situations_and_always_win: [
          {
            type: title,
            content: `I Change Situations and Always Win`
          },
          {
            type: verse,
            content: `For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith. (Mark 11:23)`
          },
          {
            type: verse,
            content: `Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world. (1 John 4:4)`
          },
          {
            type: verse,
            content: `For if by one man's offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ.)  (Romans 5:17)`
          },
          {
            type: verse,
            content: `And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death. (Revelations 12:11)`
          },
          {
            type: paragraph,
            content: `I know who I am.
          I am a victor in Christ.
          I have changed my thoughts from the past. 
          I have changed my thoughts and my heart.
          I am a success. 
          Father, thank you for leading me today.
          I worship the king of glory.
          I go out with the Lord today. 
          I go with the Holy Spirit. 
          I know in my spirit the right direction I should go. I am going to see from the right perspective, and I will do the right thing. 
          Christ, the hope of glory, lives in me. 
          There is favor to my left and to my right wherever I go. 
          I have a reigning spirit. 
          Therefore, I cannot fail. 
          I am not shaken by my surrounding circumstances or the people around me, because I am filled with the life of God and full of the Holy Spirit. 
          Father, I thank you in the name of Jesus. Hallelujah!
          I am a child of God. 
          I have a new language. 
          This language is a language of the spirit.
          This language is a victorious language.
          I always win.
          I know who I am.
          I am always victorious.
          I am always improving and making progress.
          I am moving forward.
          I am a victor.
          I got the Word of God in me. 
          I got the life of God in me. 
          Christ, the hope of glory, lives in me.
          Christ fills my spirit.
          Christ fills my soul.
          Christ fills my body.
          I carry his divine presence.
          I am the light of the world.
          I am walking in God’s marvelous light.
          There is no darkness there.
          I function in God’s glory.
          I function in God’s realm. 
          I function in God’s realm of glory, which is the realm of victory. 
          I function in God’s purpose.
          I was born for the glory of God.
          My life is full of God’s glory. 
          I came to this world at the right time.
          As God’s word enters my spirit, it enlightens me and gives me information, strengthens me, shows me the right direction to take, and builds me up. 
          This is all because I was born for the glory of God.
          I bring God’s blessing wherever I go.
          I always give blessings wherever I go. 
          I am a citizen of Zion, God’s kingdom. 
          I know who I am. 
          I bring change to any situation. 
          Therefore, I do not blame my circumstances. 
          I do not blame people, because I have the power to change situations.
          I know who I am. 
          I am filled with the life of God. 
          I change situations by the power of God’s Word and the Holy Spirit. Therefore, I always win. 
          Father, I thank you in the name of Jesus. Hallelujah!`
          }
        ],
        i_am_the_prophet_of_my_life: [
          {
            type: title,
            content: `I Am The Prophet of my Life`
          },
          {
            type: paragraph,
            content: `God is not the only one determining my blessing and curse. God has given me the power to choose my own destiny. 
          I change the course of my life with my mouth.`
          },
          {
            type: verse,
            content: `This book of the law [the Word about who I am in Christ, what I have in Christ, and what I can do] shall not depart from thy mouth, and thou shalt meditate therein day and night and thou shalt keep all that is recorded therein; then thou shalt make thy way prosperous and thou shalt have good success. (Joshua 1:8)`
          },
          {
            type: paragraph,
            content: `I am getting healthier everyday.
          I am succeed more and more everyday.
          I am getting stronger everyday.
          I am growing in knowledge, understanding, and wisdom everyday.
          God’s ability is at work in me, and therefore, I cannot fail. 
          I am a success.
          God’s hand is upon my life, and I move forward and make progress. 
          God’s ability is inside me. 
          The ability of the spirit is at work in me.
          I see my future with anticipation because I have a great future ahead of me.
          I see that all things are changing for the best. 
          I surely believe that what God has spoken about me in his Word, will all come true. Therefore, I glorify God by being unshakable in the Word and strengthened in faith. 
          My health is improving.
          My finances are increasing.
          I am making progress.
          I see prosperity.
          I see my promotion.
          Greater is he that is in me than he that is in the world.
          I have the power of God working in me.
          I can do all things through Christ who strengthens me.
          The anointing of the Holy Spirit is upon me, making me to progress further. 
          I am getting better, stronger, and bigger everyday.
          I walk in the victory in Christ Jesus’ name. 
          Glory to God.`
          }
        ],
        christ_in_me: [
          {
            type: title,
            content: `Christ in Me`
          },
          {
            type: verse,
            content: `I can do all things through Christ who strengthens me. (Philippians 4:13)`
          },
          {
            type: verse,
            content: `I have been crucified with Christ. Yet, I still live. Now it is no longer I that live but Christ living in me. The life I now live in the flesh, I live by faith in the son of God who loved me and gave himself for me. (Galatians 2:20)`
          },
          {
            type: verse,
            content: `My inner man is made strong by the spirit of the Father and his power. Christ dwells in my heart through faith. I am firmly rooted and grounded in love.  I desire to know and possess the width and length, the height and depth of Christ’s love. I know beyond mere head knowledge how much Christ loves me. I am filled with the fullness of God. My body is filled and overflowing with God. His presence is always with me in utmost abundance. (Ephesians 3:16-19)`
          },
          {
            type: verse,
            content: `There is no darkness in my body and it is full of light. God is light. My body is full of the nature and power of God. (Luke 11:36, 1 John 5:1)`
          },
          {
            type: verse,
            content: `Because Christ lives in my body, I am filled with the fullness of the Godhead bodily. (Colossians 2:9-10)`
          },
          {
            type: verse,
            content: `Christ lives in me. Christ is my hope of glory. Christ is the glory that I can see and anticipate. (Colossians 1:27)`
          },
          {
            type: verse,
            content: `I am God’s son. I can call my heavenly Father, “Abba, Father,” because he has given me the Spirit of his Son. Christ in me prays, “Abba, Father! All things are possible for you.” (Galatians 4:6, Mark 14:36)`
          },
          {
            type: verse,
            content: `I have the same glory God the Father has given Jesus. That glory speaks that “I and the Father are one.” I am one with God. (John 10:30)`
          },
          {
            type: verse,
            content: `Christ lives in me. I am one with Christ. I am one with the Father. (John 10:30)`
          },
          {
            type: verse,
            content: `My Father works through Christ living in me. Through this the world knows that the Father has sent Christ to live in me. Through this, the world knows that the Father loves me the same way he loved Jesus. (John 17:23)`
          },
          {
            type: verse,
            content: `Christ, the Anointed One, lives in my body. The Father lives in me. I am one with the Father. (John 10:30)`
          }
        ],
        confession_for_functioning_in_the_spirit: [
          {
            type: title,
            content: `Confession for Functioning in the Spirit`
          },
          {
            type: subtitle,
            content: `1. I believe in the power of the Word.`
          },
          {
            type: verse,
            content: `So mightily grew the word of God and prevailed. (Acts 19:20)`
          },
          {
            type: verse,
            content: `And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified. (Acts 20:32)`
          },
          {
            type: verse,
            content: `It is the spirit that quickeneth; the flesh profiteth nothing: the words that I speak unto you, they are spirit, and they are life. (John 6:63)`
          },
          {
            type: paragraph,
            content: `I was born of the Word.
          When the Word of God prevails in my spirit, my ability increases and my life is changed.
          The Word of God is able to build me up and give me an inheritance in Christ Jesus.
          When I hear the Word and proclaim it, that Word works in my spirit and builds me up and my ability is increased and my life is changed.
          As I receive the word, I am being prepared for greater success. 
          Everything I ask for I receive. I win many souls and I bear much fruit.`
          },
          {
            type: subtitle,
            content: `2. I am conscious of what’s inside me.`
          },
          {
            type: verse,
            content: `And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life. These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God. (1 John 5:11-13)`
          },
          {
            type: verse,
            content: `I can do all things through Christ which strengtheneth me. (Phil 4:13)`
          },
          {
            type: verse,
            content: `Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come. (John 16:13)`
          },
          {
            type: paragraph,
            content: `I am conscious of the life inside me.
          I have eternal life. Eternal life is the life of God and this eternal life was given inside of me when I accepted Jesus. 
          This ZOE life fills my spirit
          This ZOE life fills my soul.
          This ZOE life fills my body. This eternal life is a life-giving spirit. No sickness can stay in my body. 
          I live a supernatural life.
          I have Christ consciousness.
          I am one with Christ. 
          I no longer live by my own ability. I live by Christ’s ability in me. I can do anything with this ability. My excellence is his ability. 
          I am conscious of the Holy Spirit. He lives in me.
          The Holy Spirit teaches me, leads me into all truth, and instructs me. When I receive his instruction and become transformed, I always win. 
          I am conscious of the Holy Spirit.`
          },
          {
            type: subtitle,
            content: `3. I’m a soul-winner.`
          },
          {
            type: verse,
            content: `For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. (John 3:16)`
          },
          {
            type: verse,
            content: `For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek. (Romans 1:16)`
          },
          {
            type: verse,
            content: `The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly. (John 10:10)`
          },
          {
            type: verse,
            content: `And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen. (Matt 28:18-20)`
          },
          {
            type: paragraph,
            content: `I’m a soul-winner. God so loved the world that he sent His only begotten Son as a soul-winner. 
          Jesus loved souls that He gave His life to save those souls. I also love God and love souls and therefore I win souls. I’m a soul-winner.
          Soul-winning is an act of love. Soul-winning is an act of faith. I am a soul-winner. 
          I look at one soul with the eyes of the Lord and pray for him or her and share the gospel. The price for that soul has already been paid and there is power to save in the gospel I preach. As long as he accepts the gospel, I know he can come into a victorious and beautiful life. His life shall be like the rising son, shining brighter and brighter unto a perfect day. 
          I win souls anytime and anywhere. I’m a soul-winner. Soul-winning is my reason for life. It is my life’s direction. I’m a soul-winner.`
          }
        ]
      }
    },
    part_2: {
      title: `Prayer by Themes`,
      pages: {
        confession_for_healing: [
          {
            type: title,
            content: `Confession for Healing`
          },
          {
            type: verse,
            content: `And said, If thou wilt diligently hearken to the voice of the Lord thy God, and wilt do that which is right in his sight, and wilt give ear to his commandments, and keep all his statutes, I will put none of these diseases upon thee, which I have brought upon the Egyptians: for I am the Lord that healeth thee. (Exodus 15:26)`
          },
          {
            type: verse,
            content: `Bless the Lord, O my soul: and all that is within me, bless his holy name. Bless the Lord, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases; Who redeemeth thy life from destruction; who crowneth thee with lovingkindness and tender mercies; Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle's (Psalm 103:1-5)`
          },
          {
            type: verse,
            content: `But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. (Isaiah 53:5)`
          },
          {
            type: verse,
            content: `How God anointed Jesus of Nazareth with the Holy Ghost and with power: who went about doing good, and healing all that were oppressed of the devil; for God was with him. (Acts 10:38)`
          },
          {
            type: verse,
            content: `That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses. (Matthew 8:17)`
          },
          {
            type: verse,
            content: `Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed. (1 Peter 2:24)`
          },
          {
            type: paragraph,
            content: `Lord, I believe in God’s Word that says Jesus Christ is the same yesterday, today, and forever. Jesus went everywhere teaching the Word and spreading the gospel of the kingdom of God and healed many people’s diseases while living here on this earth. 
          Because I believe that Jesus is the same even today, I know he wants to heal me when I’m sick. 
          God’s Word is my life and that Word brings healing to my body. I thank you that the Word has healing power. Father, I will not take my eyes off of your Word. I will plant your Word in the deepest part of my heart and guard it with all diligence.
          I thank you that by Christ’s stripes I am healed. I do not live by what I see and I act in faith. I refuse every symptom caused by sickness in Jesus name. Praise the name of the Lord. Jesus, I love you. Thank for healing me and protecting my health. 
          I refuse any sickness or pain in my body. Such things can no longer stay in my body. I am full of God’s life and power. By the divine health God gives me I live a long and healthy life. 
          Just as the Lord has promised, Jesus has delivered me from all the curses of sickness. I cast out all the symptoms in my body with the Word of God. ZOE life flows in my body, in my spirit, and in my soul. Therefore, I declare that no sickness can exist in that ZOE life.`
          },
          {
            type: paragraph,
            content: `The weak parts of my body are being restored. Jesus was whipped and I am healed by believing in that.`
          }
        ],
        confession_for_financial_prosperity: [
          {
            type: title,
            content: `Confession for Financial Prosperity`
          },
          {
            type: verse,
            content: `Let them shout for joy, and be glad, that favour my righteous cause: yea, let them say continually, Let the Lord be magnified, which hath pleasure in the prosperity of his servant. (Psalm 35:27)`
          },
          {
            type: verse,
            content: `The blessing of the Lord, it maketh rich, and he addeth no sorrow with it. (Proverbs 10:22)`
          },
          {
            type: verse,
            content: `Cry yet, saying, Thus saith the Lord of hosts; My cities through prosperity shall yet be spread abroad; and the Lord shall yet comfort Zion, and shall yet choose Jerusalem. (Zech 1:17)`
          },
          {
            type: verse,
            content: `For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich. (2 Corinthians 8:9)`
          },
          {
            type: verse,
            content: `And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work: (2 Corinthians 9:8)`
          },
          {
            type: verse,
            content: `The young lions do lack, and suffer hunger: but they that seek the Lord shall not want any good thing. (Psalm 34:10)`
          },
          {
            type: verse,
            content: `Honour the Lord with thy substance, and with the firstfruits of all thine increase: So shall thy barns be filled with plenty, and thy presses shall burst out with new wine. (Proverbs 3:9-10)`
          },
          {
            type: verse,
            content: `But my God shall supply all your need according to his riches in glory by Christ Jesus. (Philippians 4:19)`
          },
          {
            type: verse,
            content: `If ye be willing and obedient, ye shall eat the good of the land: (Isaiah 1:19)`
          },
          {
            type: verse,
            content: `The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly. (John 10:10)`
          },
          {
            type: verse,
            content: `Therefore let no man glory in men. For all things are yours; Whether Paul, or Apollos, or Cephas, or the world, or life, or death, or things present, or things to come; all are yours; And ye are Christ's; and Christ is God's. (1 Corinthians 3:21-23)`
          },
          {
            type: verse,
            content: `But thou shalt remember the Lord thy God: for it is he that giveth thee power to get wealth, that he may establish his covenant which he sware unto thy fathers, as it is this day. (Deuteronomy 8:18)`
          },
          {
            type: paragraph,
            content: `Jesus who was prosperous became poor to pay the price to make me prosperous. (2 Corinthians 8:9)
          Therefore, I am prosperous. I cannot be poor. I always have more than enough in all things. (2 Corinthians 9:8)
          I am a child of the King. This world and all that exists in the universe belongs to my Father. I am his child. (James 1:18)
          Success is mine. I’m a success. I’m a child of God. If I am his child, I am also a joint-heir with Christ. My life is full of the glory of his inheritance and prosperity. (Ephesians 1:18)`
          },
          {
            type: paragraph,
            content: `I know who I am. I am filled with the life of God. I am full of God’s power. Christ lives in me. Hallelujah!
          In Christ, I am prosperous. I have no lack in material needs. I know that God the Father, who spared not his own son, wants to give me all things. 
          I believe that when Jesus paid the price for all our curses on the cross, he paid the price for our poverty, and the blessings of Abraham came upon us. 
          Jesus who owned the whole world was prosperous, but he paid the price to make us prosperous by becoming poor. Therefore, though a young lion may hunger in lack, for me who depends on Jesus, I believe that I have all things in abundance and that there is no lack for me. 
          Because I obey God’s Word with a joyful heart, I thank God that he not only fills me with the beautiful fruit of the land, but he also fills me with all that I need according to the glory of his riches. 
          God always gives me in abundance in all things that I lack nothing in every good work. 
          I will not use the indescribable abundance he gives me only for myself; I will use them as tools to expand the kingdom of God and to express love to my neighbors. 
          I will train myself in the principle of sowing and reaping that I may receive a greater blessing with greater faith, that I may be a blessing to others.
          My abundance is always filled to overflowing that I always have more than enough to do all the good works God asks me to do. 
          I will willingly sow and share the prosperity the Lord has committed unto me when he shows me a need and guides me to fill that need.`
          }
        ],
        confession_for_a_victorious_family: [
          {
            type: title,
            content: `Confession for a Victorious Family`
          },
          {
            type: verse,
            content: `And said, For this cause shall a man leave father and mother, and shall cleave to his wife: and they twain shall be one flesh? Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder. (Matthew 19:5-6)`
          },
          {
            type: verse,
            content: `But I would have you know, that the head of every man is Christ; and the head of the woman is the man; and the head of Christ is God. … For the man is not of the woman: but the woman of the man. Neither was the man created for the woman; but the woman for the man. (1 Corinthians 11:3, 8-9)`
          },
          {
            type: subtitle,
            content: `1. A Wife’s Prayer for her Husband`
          },
          {
            type: verse,
            content: `Likewise, ye wives, be in subjection to your own husbands; that, if any obey not the word, they also may without the word be won by the conversation of the wives; While they behold your chaste conversation coupled with fear. (1 Peter 3:1-2)`
          },
          {
            type: verse,
            content: `Wives, submit yourselves unto your own husbands, as unto the Lord. For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body. Therefore as the church is subject unto Christ, so let the wives be to their own husbands in every thing. (Ephesians 5:22-24)`
          },
          {
            type: paragraph,
            content: `My husband is the best gift God has given to me. Therefore, I value him and respect him and obey his words gladly. 
          I am his helper and I always edify and encourage him. As I pray for him. In answer to my prayer, God helps him to continually grow spiritually and to be a success in his life. Everyday, he is becoming a more influential person in the world.`
          },
          {
            type: paragraph,
            content: `My husband’s wisdom is increasing every day.
          His ability and capacity is increasing every day. 
          He is excellent in all things and is recognized as an excellent person even at his workplace, favored by his superiors, his colleagues and his inferiors. 
          He makes the right choices every day and never misses out on a good opportunity, utilizing them to continually make progress and is promoted for it.`
          },
          {
            type: subtitle,
            content: `2. A Husband’s Prayer for his Wife`
          },
          {
            type: verse,
            content: `Likewise, ye husbands, dwell with them according to knowledge, giving honour unto the wife, as unto the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered. (1 Peter 3:7)`
          },
          {
            type: verse,
            content: `Husbands, love your wives, even as Christ also loved the church, and gave himself for it; … So ought men to love their wives as their own bodies. He that loveth his wife loveth himself. ... Nevertheless let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband. (Ephesians 5:25, 28, 33)`
          },
          {
            type: verse,
            content: `Her children arise up, and call her blessed; her husband also, and he praiseth her. Many daughters have done virtuously, but thou excellest them all. Favour is deceitful, and beauty is vain: but a woman that feareth the Lord, she shall be praised. (Proverbs 31:28-30)`
          },
          {
            type: paragraph,
            content: `I will consider my wife to be a weaker vessel and value her as an heir together with me in the grace of life. 
          I love my wife as Christ loved and gave himself for the church.
          I value and love my wife as if she were my own body. 
          My wife is full of wisdom and raises our child with wisdom. My wife continually receives the spirit of wisdom and revelation through the Holy Spirit and grows spiritually everyday as a victor in every area of life.`
          },
          {
            type: subtitle,
            content: `3. A Parent’s Prayer for the Child`
          },
          {
            type: verse,
            content: `And Jesus increased in wisdom and stature, and in favour with God and man. (Luke 2:52)`
          },
          {
            type: verse,
            content: `And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord. (Ephesians 6:4)`
          },
          {
            type: verse,
            content: `Fathers, provoke not your children to anger, lest they be discouraged. (Colossians 3:21)`
          },
          {
            type: verse,
            content: `Train up a child in the way he should go: and when he is old, he will not depart from it. (Proverbs 22:6)`
          },
          {
            type: verse,
            content: `The rod and reproof give wisdom: but a child left to himself bringeth his mother to shame. Correct thy son, and he shall give thee rest; yea, he shall give delight unto thy soul. (Proverbs 29:15,17)`
          },
          {
            type: verse,
            content: `And thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might. And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up. And thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes. And thou shalt write them upon the posts of thy house, and on thy gates. (Deuteronomy 6:5-9)`
          },
          {
            type: paragraph,
            content: `My child is the best gift God has given me. Even before God formed this child in the mother’s womb, He made my child with a plan.
          I am a steward to help my child fulfill the plan God has for his/her life. 
          My child already has all the talent and abilities needed to move forward and succeed up to his/her highest calling. I teach my child the Word and how to apply the Word in his/her life so that he/she may persevere and be diligent in all things, living by faith.`
          },
          {
            type: paragraph,
            content: `My child is going to be the best in the area of his/her calling. As my child grows in understanding of God’s Word, the grace given to him/her will increase more and more and he/she will function excellently in all areas of his/her life. In his/her mouth is wisdom, his/her judgments and choices are excellent, and he/she is favored by his/her superiors and colleagues.  
          The blessings that go out of my mouth regarding my child become a reality in his/her life. 
          He/she will grow and increase more and more in wisdom and revelation, and he/she will complete every necessary training to be strongly built up like Joseph, who became an abundantly fruitful branch of the vine, expanding the kingdom of God and manifesting God’s glory. Hallelujah!`
          }
        ],
        confession_for_soul_winning: [
          {
            type: title,
            content: `Confession for Soul-Winning`
          },
          {
            type: verse,
            content: `The fruit of the righteous is a tree of life; and he that winneth souls is wise. (Proverbs 11:30)`
          },
          {
            type: verse,
            content: `And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever. (Daniel 12:3)`
          },
          {
            type: verse,
            content: `Who will have all men to be saved, and to come unto the knowledge of the truth. (1 Timothy 2:4)`
          },
          {
            type: verse,
            content: `And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house. (Acts 16:31)`
          },
          {
            type: paragraph,
            content: `Father, we come before you in prayer and in faith in the name of Jesus. Jesus came to save the lost. You want all people to be saved and to know your truth. Therefore, Father, we bring (      ) before you today.`
          },
          {
            type: paragraph,
            content: `Satan, we bind you in the name of Jesus and cast you out in all that you are doing in (      )’s life.`
          },
          {
            type: paragraph,
            content: `We ask that the Father, the Lord of the harvest will send a trustworthy worker to (      ) to share the gospel in a special way for him/her to hear the gospel and understand. As your servant serves him/her, he/she will understand the gospel and will become free of the devil’s hold on him and will serve Jesus to be the Lord of his/her life.`
          },
          {
            type: paragraph,
            content: `Your word says that you will save those who we pray for. We stand upon the Word from this moment on. Father, we thank you for his/her salvation.`
          },
          {
            type: paragraph,
            content: `We commit this work into the Father’s hands. We see in faith that (      ) is saved, filled with the Holy Spirit, and full of the Word. Amen. Hallelujah!`
          },
          {
            type: paragraph,
            content: `Pray this prayer everyday and thank the Lord that he/she is saved. Rejoice. Praise God for this victory. Thank Him that Satan is bound. Hallelujah!`
          },
          {
            type: paragraph,
            content: `[Reference Scriptures]
          Luke 19:10, 2 Timothy 2:26, Matthew 18:18, Job 22:30, Matthew 9:38, 2 Corinthians 4:4-6, Revelations 20:15, Revelations 21:27, Luke 13:1-5`
          }
        ],
        confession_for_peace: [
          {
            type: title,
            content: `Confession for Peace`
          },
          {
            type: verse,
            content: `Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid. (John 14:27)`
          },
          {
            type: verse,
            content: `Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus. (Philippians 4:6-7)`
          },
          {
            type: verse,
            content: `For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost. (Romans 14:17)`
          },
          {
            type: paragraph,
            content: `Lord, I love your Word. You said that to those who love your Word there is no obstacle and there is great peace. That peace has been poured into us through the Holy Spirit and that peace is not like the peace that the world gives. Therefore, I have no need to be worried or afraid.`
          },
          {
            type: paragraph,
            content: `I am anxious for nothing, but in everything, with prayer and supplication, I make my requests known unto the Father with thanksgiving. I am thankful that when I do so, the peace of God that surpasses all understanding will protect my heart and my mind in Christ Jesus. 
          Praise the Lord. You said that your kingdom is not eating and drinking, but only righteousness, peace, and joy in the Holy Spirit. Father, continually fill me with your Holy Spirit. I bear more fruits of peace, which is a fruit of the Spirit, in all my relationships with people. 
          The peace the Lord has given inside me is not given by the world, and therefore, the world cannot take it away from me. Because the Lord leads me from peace to peace, as I am strongly rooted, the peace I enjoy from the inside increases more and more. I always have peace inside me.`
          },
          {
            type: paragraph,
            content: `[Reference Scriptures]
          Psalm 119:165, Psalm 127:2, Isaiah 26:3, Psalm 29:11`
          }
        ],
        confession_for_wisdom_and_guidance: [
          {
            type: title,
            content: `Confession for Wisdom and Guidance`
          },
          {
            type: verse,
            content: `Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come. (John 16:13)`
          },
          {
            type: verse,
            content: `Trust in the Lord with all thine heart; and lean not unto thine own understanding. (Proverbs 3:5)`
          },
          {
            type: paragraph,
            content: `The Spirit of Truth lives in me and teaches me all things and leads me into all truths. Therefore, I confess that I perfectly know every situation and every circumstance that I face. I have the wisdom of God. (John 16:13, James 1:5)`
          },
          {
            type: paragraph,
            content: `I trust the Lord with all my heart and lean not on my own understanding. (Proverbs 3:5)`
          },
          {
            type: paragraph,
            content: `In all my ways I acknowledge Him; and He will direct my path.  (Proverbs 3:6)`
          },
          {
            type: paragraph,
            content: `God’s Word is a lamp unto my feet and a light unto my path. (Psalm 119:105)`
          },
          {
            type: paragraph,
            content: `The Lord will perfect that which concerns me. (Psalm 138:8)`
          },
          {
            type: paragraph,
            content: `I let the Word of Christ dwell in me richly in all wisdom. (Colossians 3:16)`
          },
          {
            type: paragraph,
            content: `I follow the good shepherd and know His voice. I do not follow a stranger’s voice. (John 10:4-5)`
          },
          {
            type: paragraph,
            content: `Jesus has become my wisdom, righteousness, sanctification, and redemption. Therefore, I have the wisdom of God. I have become the righteousness of God in Christ Jesus. (1 Corinthians 1:30, 2 Corinthians 5:21)`
          },
          {
            type: paragraph,
            content: `I am full of the knowledge of his will in all divine wisdom and spiritual understanding. (Colossians 1:9)`
          },
          {
            type: paragraph,
            content: `I am a new creation in Christ and a masterpiece created in Christ Jesus. Therefore, I have the mind of Christ and the wisdom of God is produced in me. (2 Corinthians 5:17, Ephesians 2:10, 1 Corinthians 2:16)`
          },
          {
            type: paragraph,
            content: `I have put off the old man and have put on the new man, which is renewed in knowledge after the image of him that created me. (Colossians 3:10)`
          },
          {
            type: paragraph,
            content: `I have received the spirit of wisdom and revelation and the eyes of my understanding have been enlightened. I do not conform to this world and am continually transformed by the renewing of my mind. My mind has been renewed through the Word of God. (Ephesians 1:17-18, Romans 12:2)`
          }
        ],
        confession_for_victory_in_face_of_trials: [
          {
            type: title,
            content: `Confession for Victory in Face of Trials`
          },
          {
            type: verse,
            content: `He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. (Psalm 23:3)`
          },
          {
            type: verse,
            content: `And not only so, but we glory in tribulations also: knowing that tribulation worketh patience; And patience, experience; and experience, hope: (Romans 5:3-4)`
          },
          {
            type: verse,
            content: `No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the Lord, and their righteousness is of me, saith the Lord. (Isaiah 54:17)`
          },
          {
            type: verse,
            content: `For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith. (1 John 5:4)`
          },
          {
            type: verse,
            content: `There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it. (1 Corinthians 10:13)`
          },
          {
            type: verse,
            content: `For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory; While we look not at the things which are seen, but at the things which are not seen: for the things which are seen are temporal; but the things which are not seen are eternal. (2 Corinthians 4:17-18)`
          },
          {
            type: verse,
            content: `And we know that all things work together for good to them that love God, to them who are the called according to his purpose. (Romans 8:28)`
          },
          {
            type: paragraph,
            content: `The Lord is my shepherd and therefore, I have no lack. I rejoice when I meet tribulation because I believe that this tribulation will give me patience, and patience, experience; and that experience will enable me to fulfill my hope. (Romans 5:3-4)`
          },
          {
            type: paragraph,
            content: `No weapon formed against me shall succeed. (Isaiah 54:17)`
          },
          {
            type: paragraph,
            content: `I have found my way out of trouble. Everyone that is born of God overcomes the world by faith. I am born of God and therefore I overcome the world. (1 John 5:4)`
          },
          {
            type: paragraph,
            content: `I am more than able to overcome all these things through Him that loved me. I am more than a conqueror. (Romans 8:37)`
          },
          {
            type: paragraph,
            content: `Because the Lord helps me I do not fear what man may do to me. (Hebrews 13:6)`
          },
          {
            type: paragraph,
            content: `I stand firm and face the problem. I have the power to be more than able to overcome this situation. God is faithful that he will not allow me to face tests that I cannot handle and makes a way out for me in the face of difficulty to be more than able to handle any situation.`
          },
          {
            type: paragraph,
            content: `Through the light affliction I experience, I am achieving a spiritual and eternal weight of glory. This trial will only become a stepping stone for me to achieve greater success. I know for sure that all things work together for those who love God and are called according to His purpose.`
          }
        ],
        confession_for_overcoming_fear: [
          {
            type: title,
            content: `Confession for Overcoming Fear`
          },
          {
            type: verse,
            content: `Whosoever shall confess that Jesus is the Son of God, God dwelleth in him, and he in God. (1 John 4:15)`
          },
          {
            type: paragraph,
            content: `I confess that Jesus is the Son of God. Therefore, God lives in me. I live in God.`
          },
          {
            type: verse,
            content: `And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him. (1 John 4:16)`
          },
          {
            type: paragraph,
            content: `I know that God loves me. I believe that God loves me. God is love. I live a life of love. I dwell in God and God dwells in me.`
          },
          {
            type: verse,
            content: `There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love. (1 John 4:18)`
          },
          {
            type: paragraph,
            content: `God loves me with a perfect love. I am not afraid that God would do something bad to me. I have conviction that God actually loves me. God loves me so much that He cannot leave me the way I am. I trust God completely. I love God because He first loved me.`
          },
          {
            type: verse,
            content: `The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid? (Psalm 27:1)`
          },
          {
            type: paragraph,
            content: `The Lord is my light and my salvation. Because He is the strength of my life, I am not afraid of anyone. I have overcome the devil. I do not fear men. I am bold as a lion.`
          },
          {
            type: verse,
            content: `What shall we then say to these things? If God be for us, who can be against us? (Romans 8:31)`
          },
          {
            type: paragraph,
            content: `God is on my side. Who could be against me and win? No one. I always win.`
          },
          {
            type: verse,
            content: `He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things? (Romans 8:32)`
          },
          {
            type: paragraph,
            content: `God has already given me the best. God has given me Jesus. I have no lack. I have more than enough to overflowing.`
          },
          {
            type: verse,
            content: `All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out. (John 6:37)`
          },
          {
            type: verse,
            content: `Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee. (Hebrews 13:5)`
          },
          {
            type: paragraph,
            content: `I have come before Jesus. Jesus never leaves me. God never abandons me. I trust Jesus completely. Jesus is my source. I do not worry whether I can have enough. I always have more than enough.`
          },
          {
            type: verse,
            content: `That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love, May be able to comprehend with all saints what is the breadth, and length, and depth, and height; And to know the love of Christ, which passeth knowledge, that ye might be filled with all the fullness of God. (Ephesians 3:17-19)`
          },
          {
            type: paragraph,
            content: `I believe Christ lives in me. I have been rooted and grounded in love. I understand and have the love of Christ. The Anointed One lives in me.`
          },
          {
            type: verse,
            content: `Submit yourselves therefore to God. Resist the devil, and he will flee from you. (James 4:7)`
          },
          {
            type: verse,
            content: `No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the Lord, and their righteousness is of me, saith the Lord. (Isaiah 54:17)`
          },
          {
            type: paragraph,
            content: `I am not afraid of the devil. When I resist the devil , he cannot help but flee. Any strategy or tactic of his is useless on me.`
          },
          {
            type: verse,
            content: `Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world. (1 John 4:4)`
          },
          {
            type: paragraph,
            content: `The wisdom of man and the wisdom of the world says that “Life is full of ups and downs,” but even though I live in the world, I am not of the world, so I keep moving upwards and forwards. There is no retreat or retrogression in my life.`
          },
          {
            type: verse,
            content: `I only think progress and success. Failure does not exist in my life. I am more than a conqueror through Christ who causes me to overcome. (Romans 8:37)`
          },
          {
            type: paragraph,
            content: `Nothing can shake me or change my mind. No situation or person can hinder my success, because success is inside me. Hallelujah!`
          }
        ],
        prayer_for_beginning_the_day: [
          {
            type: title,
            content: `Prayer for Beginning the Day`
          },
          {
            type: paragraph,
            content: `Father God, as long as I yield to you, I believe you will work in the situations of my life.
          Lord, you are the Lord of my life. Therefore I pray that you will guide me into the best 
          path you have prepared for me today.`
          },
          {
            type: paragraph,
            content: `I will only meet people whom you have planned for me to meet. I will only listen to the things you have planned for me to listen. I will only say what you want me to say.`
          },
          {
            type: paragraph,
            content: `I function as your child in the anointing of the Spirit.`
          },
          {
            type: paragraph,
            content: `I walk in the light in the name of Jesus.`
          },
          {
            type: paragraph,
            content: `There is no single soul I meet by chance.`
          },
          {
            type: paragraph,
            content: `Your spirit works in me today in the name of Jesus.`
          },
          {
            type: paragraph,
            content: `I refuse to fear. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.`
          },
          {
            type: paragraph,
            content: `I refuse to fail, because I am a victor in Jesus Christ. I am more than a conqueror by the name of Jesus.`
          },
          {
            type: paragraph,
            content: `I thank you that your presence is within me.
          Thank you that your spirit of excellence is working in me.`
          },
          {
            type: paragraph,
            content: `I don’t act or speak foolishly. God’s wisdom protects my spirit and my fellowship with the Spirit generates wise strategies in me.`
          },
          {
            type: paragraph,
            content: `I treat people through the Holy Spirit. I see the world, situations, and people through the eyes of God.`
          },
          {
            type: paragraph,
            content: `Thank you Lord. Thank you for every good thing you have granted me in my life. I 
          receive it in the name of Jesus. I am also a giver today. I give blessings in the name of Jesus. People are blessed by me. I am the source of blessings in Christ.`
          },
          {
            type: paragraph,
            content: `I yield my body to the Lord today. I submit every organ and bone of my body to the Holy Spirit.`
          },
          {
            type: paragraph,
            content: `I am your living temple today. Lord, please, speak through me, move through me, work through me, and speak in me. I will obey your words.`
          },
          {
            type: paragraph,
            content: `Divine health is inside me. I refuse any sickness, infirmity, or pain to stay in my body. Every cell in my body is filled up with life of God. I enjoy divine health. Glory to God!`
          },
          {
            type: paragraph,
            content: `Lord I thank you for the Spirit of understanding and wisdom working in me. 
          I study your Words today and understand them. When I study your Word, I will 
          understand them. That Word will work in me and I will speak the Word through my mouth constantly. I will speak boldly today about the revelation I have received and the works of God.`
          },
          {
            type: paragraph,
            content: `All the nations are waiting for me and I am on my way there now. Lord, send me there. The Lord has sent me. I have been sent by the Lord. I have a message for the world to hear, and they will listen. World, wait for me! I am on my way!`
          },
          {
            type: subtitle,
            content: `For the Family`
          },
          {
            type: paragraph,
            content: `Lord, thank you for my precious children. Your anointing is upon them. They will live only according to your will. They will only do the works of God. They will live only by your Word. In Jesus name!`
          },
          {
            type: paragraph,
            content: `No evil power can touch them.`
          },
          {
            type: paragraph,
            content: `Thank you, Father God. Wisdom is in the mouth of my wife(husband) and in her(his) heart. My wife(husband) is functioning in God today.`
          },
          {
            type: subtitle,
            content: `For the Employees`
          },
          {
            type: paragraph,
            content: `I pray for every single one of my employees in the name of Jesus. They will live only according to God’s will and God’s thoughts. In every path they move in, no harm will come upon them. God’s Word is in their heart and in their mouth. In Jesus name!`
          },
          {
            type: paragraph,
            content: `I begin today full of strength with the Holy Spirit. In Christ, according to his anointing, I can do all things. I am victorious in every situation I meet today. I am moving forward and winning today. I praise the King of glory. Hallelujah!`
          },
          {
            type: subtitle,
            content: `For my Cell Members`
          },
          {
            type: paragraph,
            content: `Lord, thank you for our beloved cell family you have sent to me. I bless them and pray for them in Jesus name. Today they will walk with Christ in the Lord. The word alive in them will work in them and as the Holy Spirit guides them and reveals things to them, they will react sensitively and move forward from glory to glory and from strength to strength. They will walk in your best path of blessing which you’ve prepared for them. They will not only receive the best of favor by meeting people you have prepared, but will also become a blessing to everyone they meet. An opportunity to win souls is opening for them. They are growing, being promoted, and moving forward. Everywhere they go God’s anointing is with them, and they will finish today with a victorious testimony in Jesus name.`
          }
        ]
      }
    },
    part_3: {
      title: `Appendix`,
      pages: {
        confessions_from_foundations_of_faith: [
          {
            type: title,
            content: `Confessions from Foundations of Faith`
          },
          {
            type: subtitle,
            content: `1. Freedom`
          },
          {
            type: verse,
            content: `If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free. (John 8:31-32)`
          },
          {
            type: verse,
            content: `Sanctify them through thy truth: thy word is truth. (John 17:17)`
          },
          {
            type: paragraph,
            content: `I desire to receive the word of God by His grace, not by my own righteousness. I refuse legalistic mindsets and judging attitudes in the name of Jesus.
          I don't approach the word of God by moral standards. I see and understand the Bible through the eyes of the gospel.
          I don't interpret the Bible based on my experience, worldly theories or knowledge. I refuse to place these things above the authority of the word of God.
          I believe that the truth sets me free as I speak, think, and act according to the word of God.`
          },
          {
            type: verse,
            content: `Unto him that loved us, and washed us from our sins in his own blood, And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen. (Revelation 1:5-6)`
          },
          {
            type: subtitle,
            content: `2. Statement of faith`
          },
          {
            type: verse,
            content: `Thou art the Christ, the Son of the living God. (Matthew 16:16)`
          },
          {
            type: verse,
            content: `But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name. (John 1:12)`
          },
          {
            type: verse,
            content: `Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;) And hath raised us up together, and made us sit together in heavenly places in Christ Jesus. (Ephesians 2:5-6)`
          },
          {
            type: paragraph,
            content: `I was born again by receiving Christ. I have been seated in places of authority in Christ Jesus.  I hereby declare that I see all circumstances through the Word, and I reign over them by proclaiming in faith.`
          },
          {
            type: subtitle,
            content: `3. Who is a Christian?`
          },
          {
            type: subtitle_2,
            content: `One who functions as a new creation`
          },
          {
            type: verse,
            content: `Therefore if any man be in Christ, he is a new creature： old things are passed away; behold, all things are become new. (2 Corinthians 5:17)`
          },
          {
            type: subtitle_2,
            content: `One who lives by the life of God`
          },
          {
            type: verse,
            content: `And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life. (1 John 5:11-12)`
          },
          {
            type: subtitle_2,
            content: `One who has overcome the world and who reigns in the world`
          },
          {
            type: verse,
            content: `Ye are of God, little children, and have overcome them： because greater is he that is in you, than he that is in the world. (John 4:4)`
          },
          {
            type: subtitle_2,
            content: `One who lives by faith`
          },
          {
            type: verse,
            content: `Therefore if any man be in Christ, he is a new creature： old things are passed away; behold, all things are become new. (2 Corinthians 5:17)`
          },
          {
            type: verse,
            content: `And the Lord said, If ye had faith as a grain of mustard seed, ye might say unto this sycamine tree, Be thou plucked up by the root, and be thou planted in the sea; and it should obey you. (Luke 17:6)`
          },
          {
            type: subtitle_2,
            content: `One who has been made righteous by the righteousness of God`
          },
          {
            type: verse,
            content: `Being justified freely by his grace through the redemption that is in Christ Jesus (Romans 3:24)`
          },
          {
            type: verse,
            content: `Who was delivered for our offences, and was raised again for our justification. (Romans 4:25)`
          },
          {
            type: verse,
            content: `For if by one man's offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ. (Romans 5:17)`
          },
          {
            type: paragraph,
            content: `As a Christian, I have eternal life. This ZOE life is a life-giving spirit. Therefore, no sickness can dwell in my body. When I encounter circumstances that I do not approve, I change them by proclaiming in faith.`
          },
          {
            type: paragraph,
            content: `As a Christian, I am superior to Satan.`
          },
          {
            type: paragraph,
            content: `I have faith. I am righteous. Righteousness is my nature. I can always stand in the presence of God without any guilt or inferiority regardless of what I have done. I have grace to do everything excellently. As a bona-fide child of God, I reign over all circumstances as Jesus did on earth. 
          I am the righteousness of God. 
          I am the trophy of God’s goodness.`
          },
          {
            type: subtitle,
            content: `4. Prayer`
          },
          {
            type: verse,
            content: `And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son. If ye shall ask anything in my name, I will do it. (John 14:13-14)`
          },
          {
            type: verse,
            content: `If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. (John 15:7)`
          },
          {
            type: verse,
            content: `Ye have not chosen me, but I have chosen you, and ordained you, that ye should go and bring forth fruit, and that your fruit should remain： that whatsoever ye shall ask of the Father in my name, he may give it you. (John 15:16)`
          },
          {
            type: paragraph,
            content: `God has chosen me and ordained me so that He can answer my prayer. I ask for what I need today in prayer in the name of Jesus according to the word of God. I believe I have already received what I have asked for. My prayers are always answered because God is faithful.`
          },
          {
            type: subtitle,
            content: `5. Guidance of the Holy Spirit`
          },
          {
            type: verse,
            content: `But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you. (John 14:26)`
          },
          {
            type: verse,
            content: `My sheep hear my voice, and I know them, and they follow me (John 10:27)`
          },
          {
            type: verse,
            content: `For as many as are led by the Spirit of God, they are the sons of God. (Romans 8:14)`
          },
          {
            type: paragraph,
            content: `I hear the voice of the Lord because I'm His sheep. As the Lord abides in me, He guides me in various ways in everything that I trust Him with. I enjoy the abundant life of Christians by committing more of my life to His guidance.`
          },
          {
            type: subtitle,
            content: `6. Fundamental Doctrine I`
          },
          {
            type: verse,
            content: `All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness (2 Timothy 3:16)`
          },
          {
            type: verse,
            content: `Ye are of God, little children, and have overcome them because greater is he that is in you, than he that is in the world. (1 John 4:4)`
          },
          {
            type: verse,
            content: `Submit yourselves therefore to God. Resist the devil, and he will flee from you. (James 4:7)`
          },
          {
            type: paragraph,
            content: `I believe in the sovereignty of God who reigns over the universe and in the redemption of Jesus Christ. I rely on the Holy Spirit who is still living, working, and helping me.
          I believe all Scripture is written by inspiration of God and is unchanging truth. I proclaim that I will think, speak and live according to the word of truth.
          I know that Satan is a disarmed enemy. I confront his deceptions with the word of God and always triumph. I declare all stealing and destroying works of the enemy illegal.`
          },
          {
            type: subtitle,
            content: `7. Fundamental Doctrine II`
          },
          {
            type: verse,
            content: `But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth. (Acts 1:8)`
          },
          {
            type: paragraph,
            content: `I believe that there is no coincidence for Christians. Therefore, I give full measure to worship, accomplish the will of God in all encounters and incidents, and live every moment to the best of my ability.
          I do not get caught up in men's praise or criticism since the Lord knows everything about me. Instead, I am conscious of Him who reigns over the universe and only desire His acknowledgements.
          I am a spirit, I have a soul, and I live in a body. I am a weapon of righteousness.  My soul submits to my spirit and my flesh submits to my renewed soul as I confess the Word.
          As a Christian, I no longer live for myself, but I have set my life’s pilgrimage for the glory of God, the benefits of others, and the spread of the gospel.`
          },
          {
            type: subtitle,
            content: `8. God’s Character`
          },
          {
            type: verse,
            content: `The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly. (John 10:10)`
          },
          {
            type: paragraph,
            content: `God is good and the devil is bad. I believe in His goodness, mightiness, and righteousness. He faithfully works according to His promise whenever I get hold of His word.
          I joyfully obey the Word of God today because I believe that God is love and that He always gives me freedom.`
          },
          {
            type: paragraph,
            content: `God is the same yesterday, today and forever and He does not look at men's appearance. He works for me in the same way as He did for the righteous men of both the Old and New Testament when I get hold of all the words He has given to them.`
          },
          {
            type: subtitle,
            content: `9. Nine Gifts of the Holy Spirit`
          },
          {
            type: verse,
            content: `Now there are diversities of gifts, but the same Spirit.  And there are differences of administrations, but the same Lord. And there are diversities of operations, but it is the same God which worketh all in all. But the manifestation of the Spirit is given to every man to profit withal. (1 Corinthians 12:4-7)`
          },
          {
            type: verse,
            content: `But covet earnestly the best gifts: and yet shew I unto you a more excellent way. (1 Corinthians 12:31)`
          },
          {
            type: paragraph,
            content: `I eagerly desire the gifts of the Holy Spirit today. I desire the word of knowledge, the word of wisdom, discerning of spirits, the gifts of healing, faith, the working of miracles, divers kinds of tongues, prophecy, the interpretation of tongues to be manifested in my life, in my cell and in my church in such abundance that we may become powerful Christians and a powerful church.`
          },
          {
            type: subtitle,
            content: `10. Faith`
          },
          {
            type: verse,
            content: `So then faith cometh by hearing, and hearing by the word of God (Romans 10:17)`
          },
          {
            type: verse,
            content: `But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him. (Hebrews 11:6)`
          },
          {
            type: verse,
            content: `For we walk by faith, not by sight (2 Corinthians 5:7)`
          },
          {
            type: verse,
            content: `Now the just shall live by faith: but if any man draw back, my soul shall have no pleasure in him. (Hebrews 10:38)`
          },
          {
            type: paragraph,
            content: `I seek and enjoy the blessings of His promise by faith today. Faith comes by hearing the word of God and it works when I confess the word. I live by faith, not by sight. My faith is increasing every day.`
          },
          {
            type: subtitle,
            content: `11. Spiritual Growth`
          },
          {
            type: verse,
            content: `“To prepare God's people for works of service, so that the body of Christ may be built up” (Ephesians 4:12)`
          },
          {
            type: verse,
            content: `"But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord." (2 Corinthians 3:18)`
          },
          {
            type: paragraph,
            content: `I am a teachable spirit, who humbly receives the word of God regarding new creation realities, applies the word of righteousness to my life, and grows spiritually every day with patience. I don't stop growing until I come to the measure of the stature of the fullness of Christ. I look intently into the perfect law that gives me freedom. I am being changed from glory to glory by the Holy Spirit. I am a branch who brings forth its fruit in season.`
          },
          {
            type: subtitle,
            content: `12. The Hope of His Calling`
          },
          {
            type: verse,
            content: `“As you sent me into the world, I have sent them into the world.” (John 17:18)`
          },
          {
            type: verse,
            content: `"If a man therefore purge himself from these, he shall be a vessel unto honour, sanctified, and meet for the master's use, and prepared unto every good work." (2 Timothy 2:21)`
          },
          {
            type: verse,
            content: `"Moreover it is required in stewards, that a man be found faithful." (1 Corinthians 4:2)`
          },
          {
            type: paragraph,
            content: `I live in the world, but I am not of the world. I belong to the kingdom of heaven and I shine forth the light of Jesus in the world. I believe the Holy Spirit in me is guiding me to my utmost calling as I faithfully complete the small tasks I am entrusted with. As a pilgrim, I serve Jesus as my Lord and readily obey his voice every day.`
          }
        ],
        confessions_from_psalms: [
          {
            type: title,
            content: `Confessions from Psalms`
          },
          {
            type: subtitle,
            content: `Psalm 1:1-3`
          },
          {
            type: paragraph,
            content: `Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.
          But his delight is in the law of the Lord; and in his law doth he meditate day and night.
          And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.`
          },
          {
            type: subtitle,
            content: `Psalm 23`
          },
          {
            type: paragraph,
            content: `The Lord is my shepherd; I shall not want.
          He maketh me to lie down in green pastures: he leadeth me beside the still waters.
          He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.
          Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.
          Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.
          Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.`
          },
          {
            type: subtitle,
            content: `Psalm 91`
          },
          {
            type: paragraph,
            content: `He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.
          I will say of the Lord, He is my refuge and my fortress: my God; in him will I trust.
          Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.
          He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.
          Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day;
          Nor for the pestilence that walketh in darkness; nor for the destruction that wasteth at noonday.
          A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee.
          Only with thine eyes shalt thou behold and see the reward of the wicked.
          Because thou hast made the Lord, which is my refuge, even the most High, thy habitation;
          There shall no evil befall thee, neither shall any plague come nigh thy dwelling.
          For he shall give his angels charge over thee, to keep thee in all thy ways.
          They shall bear thee up in their hands, lest thou dash thy foot against a stone.
          Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.
          Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name.
          He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him.
          With long life will I satisfy him, and shew him my salvation.`
          },
          {
            type: subtitle,
            content: `Psalm 103:1-5`
          },
          {
            type: paragraph,
            content: `Bless the Lord, O my soul: and all that is within me, bless his holy name.
          Bless the Lord, O my soul, and forget not all his benefits:
          Who forgiveth all thine iniquities; who healeth all thy diseases;
          Who redeemeth thy life from destruction; who crowneth thee with lovingkindness and tender mercies;
          Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle's.`
          },
          {
            type: subtitle,
            content: `Psalm 127`
          },
          {
            type: paragraph,
            content: `Except the Lord build the house, they labour in vain that build it: except the Lord keep the city, the watchman waketh but in vain.
          It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep.
          Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.
          As arrows are in the hand of a mighty man; so are children of the youth.
          Happy is the man that hath his quiver full of them: they shall not be ashamed, but they shall speak with the enemies in the gate.`
          },
          {
            type: subtitle,
            content: `Psalm 128`
          },
          {
            type: paragraph,
            content: `Blessed is every one that feareth the Lord; that walketh in his ways.
          For thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee.
          Thy wife shall be as a fruitful vine by the sides of thine house: thy children like olive plants round about thy table.
          Behold, that thus shall the man be blessed that feareth the Lord.
          The Lord shall bless thee out of Zion: and thou shalt see the good of Jerusalem all the days of thy life.
          Yea, thou shalt see thy children's children, and peace upon Israel.`
          },
          {
            type: subtitle,
            content: `Psalm 133`
          },
          {
            type: paragraph,
            content: `Behold, how good and how pleasant it is for brethren to dwell together in unity!
          It is like the precious ointment upon the head, that ran down upon the beard, even Aaron's beard: that went down to the skirts of his garments;
          As the dew of Hermon, and as the dew that descended upon the mountains of Zion: for there the Lord commanded the blessing, even life forevermore.`
          }
        ],
        romans_8: [
          {
            type: title,
            content: `Romans 8`
          },
          {
            type: paragraph,
            content: `There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.
          For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.
          For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:
          That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.
          For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit.
          For to be carnally minded is death; but to be spiritually minded is life and peace.
          Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be.
          So then they that are in the flesh cannot please God.
          But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his.
          And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness.
          But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you.
          Therefore, brethren, we are debtors, not to the flesh, to live after the flesh.
          For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live.
          For as many as are led by the Spirit of God, they are the sons of God.
          For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.
          The Spirit itself beareth witness with our spirit, that we are the children of God:
          And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.
          For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.
          For the earnest expectation of the creature waiteth for the manifestation of the sons of God.
          For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected the same in hope,
          Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.
          For we know that the whole creation groaneth and travaileth in pain together until now.
          And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body.
          For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for?
          But if we hope for that we see not, then do we with patience wait for it.
          Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.
          And he that searcheth the hearts knoweth what is the mind of the Spirit, because he maketh intercession for the saints according to the will of God.
          And we know that all things work together for good to them that love God, to them who are the called according to his purpose.
          For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren.
          Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.
          What shall we then say to these things? If God be for us, who can be against us?
          He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?
          Who shall lay any thing to the charge of God's elect? It is God that justifieth.
          Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.
          Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?
          As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.
          Nay, in all these things we are more than conquerors through him that loved us.
          For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,
          Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.
          Romans 8:1-39`
          }
        ],
        isaiah_60: [
          {
            type: title,
            content: `Isaiah 60`
          },
          {
            type: paragraph,
            content: `Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.
          For, behold, the darkness shall cover the earth, and gross darkness the people: but the Lord shall arise upon thee, and his glory shall be seen upon thee.
          And the Gentiles shall come to thy light, and kings to the brightness of thy rising.
          Lift up thine eyes round about, and see: all they gather themselves together, they come to thee: thy sons shall come from far, and thy daughters shall be nursed at thy side.
          Then thou shalt see, and flow together, and thine heart shall fear, and be enlarged; because the abundance of the sea shall be converted unto thee, the forces of the Gentiles shall come unto thee.
          The multitude of camels shall cover thee, the dromedaries of Midian and Ephah; all they from Sheba shall come: they shall bring gold and incense; and they shall shew forth the praises of the Lord.
          All the flocks of Kedar shall be gathered together unto thee, the rams of Nebaioth shall minister unto thee: they shall come up with acceptance on mine altar, and I will glorify the house of my glory.
          Who are these that fly as a cloud, and as the doves to their windows?
          Surely the isles shall wait for me, and the ships of Tarshish first, to bring thy sons from far, their silver and their gold with them, unto the name of the Lord thy God, and to the Holy One of Israel, because he hath glorified thee.
          And the sons of strangers shall build up thy walls, and their kings shall minister unto thee: for in my wrath I smote thee, but in my favour have I had mercy on thee.
          Therefore thy gates shall be open continually; they shall not be shut day nor night; that men may bring unto thee the forces of the Gentiles, and that their kings may be brought.
          For the nation and kingdom that will not serve thee shall perish; yea, those nations shall be utterly wasted.
          The glory of Lebanon shall come unto thee, the fir tree, the pine tree, and the box together, to beautify the place of my sanctuary; and I will make the place of my feet glorious.
          The sons also of them that afflicted thee shall come bending unto thee; and all they that despised thee shall bow themselves down at the soles of thy feet; and they shall call thee; The city of the Lord, The Zion of the Holy One of Israel.
          Whereas thou has been forsaken and hated, so that no man went through thee, I will make thee an eternal excellency, a joy of many generations.
          Thou shalt also suck the milk of the Gentiles, and shalt suck the breast of kings: and thou shalt know that I the Lord am thy Saviour and thy Redeemer, the mighty One of Jacob.
          For brass I will bring gold, and for iron I will bring silver, and for wood brass, and for stones iron: I will also make thy officers peace, and thine exactors righteousness.
          Violence shall no more be heard in thy land, wasting nor destruction within thy borders; but thou shalt call thy walls Salvation, and thy gates Praise.
          The sun shall be no more thy light by day; neither for brightness shall the moon give light unto thee: but the Lord shall be unto thee an everlasting light, and thy God thy glory.
          Thy sun shall no more go down; neither shall thy moon withdraw itself: for the Lord shall be thine everlasting light, and the days of thy mourning shall be ended.
          Thy people also shall be all righteous: they shall inherit the land for ever, the branch of my planting, the work of my hands, that I may be glorified.
          A little one shall become a thousand, and a small one a strong nation: I the Lord will hasten it in his time.`
          }
        ]
      }
    }
  }
};
