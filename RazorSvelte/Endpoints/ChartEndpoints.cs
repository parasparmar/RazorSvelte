﻿using Microsoft.AspNetCore.Authorization;
using System.Net.Mime;

namespace RazorSvelte.Endpoints;

public class ChartEndpoints
{
    public const string Chart1Url = $"{Consts.ApiSegment}/chart/1";
    public const string Chart2Url = $"{Consts.ApiSegment}/chart/2";
    public const string Chart3Url = $"{Consts.ApiSegment}/chart/3";

    public static void UseEndpoints(WebApplication app)
    {
        app.MapGet(Chart1Url, Chart1);
        app.MapGet(Chart2Url, Chart2);
        app.MapGet(Chart3Url, Chart3);
    }

    [AllowAnonymous]
    static string Chart1(HttpResponse response)
    {
        response.ContentType = MediaTypeNames.Application.Json;
        return File.ReadAllText("./SampleData/chart1.json");
    }

    [AllowAnonymous]
    static string Chart2(HttpResponse response)
    {
        response.ContentType = MediaTypeNames.Application.Json;
        return File.ReadAllText("./SampleData/chart2.json");
    }

    [AllowAnonymous]
    static string Chart3(HttpResponse response)
    {
        response.ContentType = MediaTypeNames.Application.Json;
        return File.ReadAllText("./SampleData/chart3.json");
    }
}
