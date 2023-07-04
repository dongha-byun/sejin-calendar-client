import React from "react";
import './mainMenuStyle.css';
import { 
    COMPANY_TYPE_AGENCY, COMPANY_TYPE_BINDING, COMPANY_TYPE_MATERIAL, COMPANY_TYPE_PAPER, COMPANY_TYPE_PRINT, COMPANY_WIN_FEATURES, 
    MATERIAL_TYPE_ACETATE, MATERIAL_TYPE_BIG_PAPER, MATERIAL_TYPE_BOX, MATERIAL_TYPE_GOLD, MATERIAL_TYPE_HALF_MOON, 
    MATERIAL_TYPE_HODLER, MATERIAL_TYPE_SACK, MATERIAL_TYPE_TWIN, MATERIAL_TYPE_VINYL, MATERIALS_WIN_FEATURES, 
    MODEL_WIN_FEATURES, PAPER_WIN_FEATURES 
} from "../../js/constants/constants";

export default function MainPage() {

    const openCompanyWin = (companyType) => {
        openWindow("/custom-company", "custom_company_win", COMPANY_WIN_FEATURES);
    }

    const openMaterialWin = (materialType) => {
        openWindow("/material", "material_win", MATERIALS_WIN_FEATURES);
    }

    const openPaperWin = () => {
        openWindow("/paper", "paper_win", PAPER_WIN_FEATURES);
    }

    const openModelWin = () => {
        openWindow("/model", "model_win", MODEL_WIN_FEATURES);
    }

    const openWindow = (url, popName, features) => {
        window.open(url, popName, features);
    }

    return (
        <ul>
            <li ><a href="#">기초자료등록</a>
                <ul>
                    <li><a href="#">거래처</a>
                        <ul>
                            <li><a href="#" onClick={() => openCompanyWin(COMPANY_TYPE_MATERIAL)} >자재관련</a></li>
                            <li><a href="#" onClick={() => openCompanyWin(COMPANY_TYPE_PRINT)} >인쇄소</a></li>
                            <li><a href="#" onClick={() => openCompanyWin(COMPANY_TYPE_PAPER)} >지업사</a></li>
                            <li><a href="#" onClick={() => openCompanyWin(COMPANY_TYPE_BINDING)} >제본소</a></li>
                            <li><a href="#" onClick={() => openCompanyWin(COMPANY_TYPE_AGENCY)} >총판</a></li>
                        </ul>
                    </li>
                    <li><a href="#">원자재</a>
                        <ul>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_GOLD)}>금구</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_HODLER)}>홀더</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_ACETATE)}>아스테지</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_TWIN)}>TWIN</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_BIG_PAPER)}>대지</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_BOX)}>Box</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_SACK)}>봉투</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_HALF_MOON)}>반달고리</a></li>
                            <li><a href="#" onClick={() => openMaterialWin(MATERIAL_TYPE_VINYL)}>비닐</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={openPaperWin}>용지</a></li>
                    <li><a href="#" onClick={openModelWin}>Model</a></li>
                </ul>
            </li>
            <li><a href="#">자재발주</a>
                <ul>
                    <li><a href="#">원자재</a>
                        <ul>
                            <li><a href="#">금구</a></li>
                            <li><a href="#">홀더</a></li>
                            <li><a href="#">아스테지</a></li>
                            <li><a href="#">TWIN</a></li>
                            <li><a href="#">대지</a></li>
                            <li><a href="#">Box</a></li>
                            <li><a href="#">봉투</a></li>
                            <li><a href="#">반달고리</a></li>
                            <li><a href="#">비닐</a></li>
                        </ul>
                    </li>
                    <li><a href="#">용지</a></li>
                </ul>
            </li>
            <li><a href="#">자재입고</a>
                <ul>
                    <li><a href="#">원자재</a>
                        <ul>
                            <li><a href="#">금구</a></li>
                            <li><a href="#">홀더</a></li>
                            <li><a href="#">아스테지</a></li>
                            <li><a href="#">TWIN</a></li>
                            <li><a href="#">대지</a></li>
                            <li><a href="#">Box</a></li>
                            <li><a href="#">봉투</a></li>
                            <li><a href="#">반달고리</a></li>
                            <li><a href="#">비닐</a></li>
                        </ul>
                    </li>
                    <li><a href="#">용지</a></li>
                </ul>
            </li>
            <li><a href="#">작업지시</a>
                <ul>
                    <li><a href="#">용지배송</a></li>
                    <li><a href="#">인쇄지시</a></li>
                    <li><a href="#">제본지시</a></li>
                    <li><a href="#">상호쇄입</a>
                        <ul>
                            <li><a href="#">금구</a></li>
                            <li><a href="#">홀더</a></li>
                            <li><a href="#">아스테지</a></li>
                            <li><a href="#">TWIN</a></li>
                            <li><a href="#">대지</a></li>
                            <li><a href="#">Box</a></li>
                            <li><a href="#">봉투</a></li>
                            <li><a href="#">반달고리</a></li>
                            <li><a href="#">비닐</a></li>
                        </ul>
                    </li>
                    <li><a href="#">출고증발행</a>
                        <ul>
                        <li><a href="#">벽제본</a></li>
                        <li><a href="#">상호</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">작업일지</a>
                <ul>
                    <li><a href="#">인쇄물입고</a></li>
                    <li><a href="#">정합</a>
                        <ul>
                            <li><a href="#">1호기</a></li>
                            <li><a href="#">2호기</a></li>
                            <li><a href="#">3호기</a></li>
                            <li><a href="#">기타</a></li>
                        </ul>
                    </li>
                    <li><a href="#">제본</a>
                        <ul>
                            <li><a href="#">금구</a></li>
                            <li><a href="#">홀더</a></li>
                            <li><a href="#">탄자크</a></li>
                            <li><a href="#">TWIN</a></li>
                            <li><a href="#">탁상대지</a></li>
                            <li><a href="#">TWIN 아스테지</a></li>
                            <li><a href="#">TWIN 홀더</a></li>
                            <li><a href="#">STITCH</a></li>
                            <li><a href="#">TWIN 반달고리</a></li>
                            <li><a href="#">기타</a></li>
                        </ul>
                    </li>
                    <li><a href="#">상호인쇄</a>
                        <ul>
                            <li><a href="#">에구다1</a></li>
                            <li><a href="#">에구다2</a></li>
                            <li><a href="#">금박1</a></li>
                            <li><a href="#">금박2</a></li>
                            <li><a href="#">마스터</a></li>
                            <li><a href="#">베이비</a></li>
                            <li><a href="#">씰크</a></li>
                            <li><a href="#">다이어리</a></li>
                            <li><a href="#">기계</a></li>
                        </ul>
                    </li>
                    <li><a href="#">포장</a></li>
                    <li><a href="#">제품출고</a></li>
                </ul>
            </li>
            <li><a href="#">주문접수</a>
                <ul>
                    <li><a href="#">접수</a></li>
                    <li><a href="#">취소</a></li>
                    <li><a href="#">반품</a></li>
                </ul>
            </li>
            <li ><a href="#">수정</a>
                <ul>
                    <li><a href="#">기초자료</a>
                        <ul>
                            <li><a href="#">거래처</a></li>
                            <li><a href="#">원자재</a></li>
                            <li><a href="#">용지</a></li>
                            <li><a href="#">Model</a></li>
                        </ul>
                    </li>
                    <li><a href="#">자재관련</a>
                        <ul>
                            <li><a href="#">원자재발주</a></li>
                            <li><a href="#">용지발주</a></li>
                            <li><a href="#">원자재입고</a></li>
                            <li><a href="#">용지입고</a></li>
                        </ul>
                    </li>
                    <li><a href="#">작업지시</a>
                        <ul>
                            <li><a href="#">용지배송</a></li>
                            <li><a href="#">인쇄지시</a></li>
                            <li><a href="#">제본지시</a></li>
                        </ul>
                    </li>
                    <li><a href="#">작업일지</a>
                        <ul>
                            <li><a href="#">인쇄물입고</a></li>
                            <li><a href="#">정합</a></li>
                            <li><a href="#">제본</a></li>
                            <li><a href="#">견본</a></li>
                        </ul>
                    </li>
                    <li><a href="#">접수장부</a></li>
                </ul>
            </li>
            <li ><a href="#">검색</a>
                <ul>
                    <li><a href="#">기초자료</a>
                        <ul>
                            <li><a href="#">거래처</a></li>
                            <li><a href="#">원자재</a></li>
                            <li><a href="#">용지</a></li>
                            <li><a href="#">Model</a></li>
                        </ul>
                    </li>
                    <li><a href="#">자재관련</a>
                        <ul>
                            <li><a href="#">원자재발주</a></li>
                            <li><a href="#">용지발주</a></li>
                            <li><a href="#">원자재입고</a></li>
                            <li><a href="#">용지입고</a></li>
                        </ul>
                    </li>
                    <li><a href="#">작업지시</a>
                        <ul>
                            <li><a href="#">용지배송</a></li>
                            <li><a href="#">인쇄지시</a></li>
                            <li><a href="#">제본지시</a></li>
                        </ul>
                    </li>
                    <li><a href="#">작업일지</a>
                        <ul>
                            <li><a href="#">인쇄물입고</a></li>
                            <li><a href="#">정합</a></li>
                            <li><a href="#">제본</a></li>
                            <li><a href="#">견본</a></li>
                        </ul>
                    </li>
                    <li><a href="#">접수장부</a></li>
                </ul>
            </li>
            <li ><a href="#">각종조회</a>
                <ul>
                    <li><a href="#">원자재재고조회</a>
                        <ul>
                            <li><a href="#">금구</a></li>
                            <li><a href="#">홀더</a></li>
                            <li><a href="#">아스테지</a></li>
                            <li><a href="#">TWIN</a></li>
                            <li><a href="#">대지</a></li>
                            <li><a href="#">Box</a></li>
                            <li><a href="#">봉투</a></li>
                            <li><a href="#">반달고리</a></li>
                            <li><a href="#">비닐</a></li>
                        </ul>
                    </li>
                    <li><a href="#">용지재고조회</a>
                        <ul>
                            <li><a href="#">용지별재고조회</a></li>
                            <li><a href="#">인쇄소별재고조회</a></li>
                        </ul>
                    </li>
                    <li><a href="#">호별생산내역조회</a></li>
                    <li><a href="#">접수내역조회</a></li>
                </ul>
            </li>
            <li><a href="#">기타작업</a>
                <ul>
                    <li><a href="#">선적관련</a></li>
                    <li><a href="#">각종양식</a></li>
                    <li><a href="#">견본</a></li>
                    <li><a href="#">매출현황</a></li>
                    <li><a href="#">정합작업현황</a>
                        <ul>
                            <li><a href="#">보기용</a></li>
                            <li><a href="#">변경용</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">관리자</a>
                <ul>
                    <li><a href="#">계정관리</a></li>
                    <li><a href="#">권한관리</a></li>
                    <li><a href="#">메뉴관리</a></li>
                </ul>
            </li>
        </ul>
    );
}